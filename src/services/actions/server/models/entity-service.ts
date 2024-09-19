import {
    TCreateEntityArgs,
    TDeleteEntityArgs,
    TEntityActionResponse,
    TMaybeEntity,
    TReadEntityArgs,
    TTable,
    TTableInsert,
    TTableRow,
    TTableUpdate,
    TTables,
    TUpdateEntityArgs,
    TUpsertEntityArgs,
} from "@/types";

import { PostgrestError } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { getEntitySuccessMessage } from "@/utils/status-messages/get-entity-success-message";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export class EntityService {
    private supabase;

    constructor() {
        this.supabase = createClient(); // Initialize the Supabase client once in the constructor
    }

    async createEntityOrEntities<T extends TTable>({
        relation,

        formData,
        selectCriteria,
    }: TCreateEntityArgs<T>): Promise<
        TEntityActionResponse<
            TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
        >
    > {
        try {
            if (!relation) throw new Error("A relation must be provided");

            let data: TTableRow<T> | TTableRow<T>[] | null,
                error: PostgrestError | null;

            const isMultiple = Array.isArray(formData);

            if (isMultiple) {
                ({ data, error } = await this.supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .insert<TTableInsert<T>>(formData)
                    .select(selectCriteria?.columns ?? "*"));
            } else {
                ({ data, error } = await this.supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .insert<TTableInsert<T>>(formData)
                    .select(selectCriteria?.columns ?? "*")
                    .single<TTableRow<T>>());
            }

            if (error) throw new Error(error.message);

            return {
                success: true,
                message: getEntitySuccessMessage({
                    relation,

                    messageType: isMultiple ? "createMany" : "createOne",
                }),
                data,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                data: undefined as TMaybeEntity<TTableRow<T>>,
            };
        }
    }

    async deleteEntityOrEntities<T extends TTable>({
        relation,
        entityIds,

        selectCriteria,
    }: TDeleteEntityArgs<T>): Promise<
        TEntityActionResponse<
            TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
        >
    > {
        try {
            if (!entityIds.length || !relation)
                throw new Error(
                    "At least one ID and a relation name must be provided",
                );

            const supabase = createClient();

            let data: TTableRow<T> | TTableRow<T>[] | null,
                error: PostgrestError | null;

            const isMultiple = entityIds.length > 1;

            if (isMultiple) {
                // Handle multiple deletions
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .delete()
                    .in("id", entityIds)
                    .select(selectCriteria?.columns ?? "*"));
            } else {
                // Handle a single deletion
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .delete()
                    .eq("id", entityIds[0])
                    .select(selectCriteria?.columns ?? "*")
                    .single<TTableRow<T>>());
            }

            if (error) throw new Error(error.message);

            return {
                success: true,
                message: getEntitySuccessMessage({
                    relation,

                    messageType: isMultiple ? "deleteMany" : "deleteOne",
                }),
                data,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                data: undefined as TMaybeEntity<TTableRow<T>>,
            };
        }
    }

    async readEntityOrEntities<T extends TTable>({
        relation,
        entityId,
        entityIds,
        selectCriteria,
    }: TReadEntityArgs<T>): Promise<
        TEntityActionResponse<
            TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
        >
    > {
        try {
            if (!relation) throw new Error("A relation must be provided");

            const supabase = createClient();

            let data: TTableRow<T> | TTableRow<T>[] | null,
                error: PostgrestError | null;

            if (entityId) {
                ({ data, error } = (await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .select(selectCriteria?.columns, selectCriteria?.options)
                    .in("id", [entityId])) as {
                    data: TTableRow<T>[] | null;
                    error: PostgrestError | null;
                });
            }

            if (!entityIds || entityIds.length === 0) {
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .select(selectCriteria?.columns, selectCriteria?.options));
            } else if (entityIds.length > 1) {
                ({ data, error } = (await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .select(selectCriteria?.columns, selectCriteria?.options)
                    .in("id", entityIds)) as {
                    data: TTableRow<T>[] | null;
                    error: PostgrestError | null;
                });
            } else {
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .select(selectCriteria?.columns, selectCriteria?.options)
                    .eq("id", entityIds[0])
                    .single<TTableRow<T>>());
            }

            if (error) throw new Error(error.message);

            return {
                success: true,
                message: getEntitySuccessMessage({
                    relation,

                    messageType:
                        !entityIds || entityIds.length === 0
                            ? "readAll"
                            : entityIds.length > 1
                            ? "readMany"
                            : "readOne",
                }),
                data,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                data: undefined as TMaybeEntity<TTableRow<T>>,
            };
        }
    }

    async updateEntity<T extends TTable>({
        relation,
        entityId,

        formData,
        selectCriteria,
    }: TUpdateEntityArgs<T>): Promise<
        TEntityActionResponse<TMaybeEntity<TTableRow<T>>>
    > {
        try {
            if (!entityId) throw new Error("An ID must be provided");

            const supabase = createClient();

            const { data, error } = await supabase
                .from<TTable, TTables[TTable]>(relation)
                .update<TTableUpdate<T>>(formData)
                .eq("id", entityId)
                .select(selectCriteria?.columns ?? "*")
                .single<TTableRow<T>>();

            if (error) throw new Error(error.message);

            return {
                success: true,
                message: getEntitySuccessMessage({
                    messageType: "updateOne",
                }),
                data,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                data: undefined as TMaybeEntity<TTableRow<T>>,
            };
        }
    }

    async upsertEntityOrEntities<T extends TTable>({
        relation,
        formData,
        selectCriteria,
        onConflictColumns,
    }: TUpsertEntityArgs<T>): Promise<
        TEntityActionResponse<
            TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
        >
    > {
        try {
            const supabase = createClient();

            let data: TTableRow<T> | TTableRow<T>[] | null,
                error: PostgrestError | null;

            const isMultiple = Array.isArray(formData);

            if (isMultiple) {
                // Handle multiple upserts
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .upsert<TTableInsert<T>>(formData, {
                        onConflict: onConflictColumns,
                    })
                    .select(selectCriteria?.columns ?? "*"));
            } else {
                // Handle a single upsert
                ({ data, error } = await supabase
                    .from<TTable, TTables[TTable]>(relation)
                    .upsert<TTableInsert<T>>(formData, {
                        onConflict: onConflictColumns || undefined,
                    })
                    .select(selectCriteria?.columns ?? "*")
                    .single<TTableRow<T>>());
            }

            if (error) throw new Error(error.message);

            return {
                success: true,
                message: getEntitySuccessMessage({
                    relation,

                    messageType: isMultiple ? "upsertMany" : "upsertOne",
                }),
                data,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                data: undefined,
            };
        }
    }
}
