"use server";

import type {
    TEntityActionResponse,
    TMaybeEntity,
    TReadEntityArgs,
    TTable,
    TTableRow,
} from "@/types";

import { EntityService } from "@/models/supabase/entity-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const readEntityOrEntities = async <T extends TTable>({
    relation,
    entityIds,
    entityName,
    selectCriteria,
}: TReadEntityArgs<T>): Promise<
    TEntityActionResponse<
        TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
    >
> => {
    try {
        const entityService = new EntityService();
        return await entityService.readEntityOrEntities({
            relation,
            entityIds,
            entityName,
            selectCriteria,
        });
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            data: undefined as TMaybeEntity<TTableRow<T>>,
        };
    }
};
