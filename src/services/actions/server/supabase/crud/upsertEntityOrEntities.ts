"use server";

import {
    TEntityActionResponse,
    TMaybeEntity,
    TTable,
    TTableRow,
    TUpsertEntityArgs,
} from "@/types";

import { EntityService } from "@/models/supabase/entity-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const upsertEntityOrEntities = async <T extends TTable>({
    relation,
    formData,
    selectCriteria,
    onConflictColumns,
    entityName,
}: TUpsertEntityArgs<T>): Promise<
    TEntityActionResponse<
        TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
    >
> => {
    try {
        const entityService = new EntityService();
        return await entityService.upsertEntityOrEntities({
            relation,
            formData,
            selectCriteria,
            onConflictColumns,
            entityName,
        });
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            data: undefined,
        };
    }
};
