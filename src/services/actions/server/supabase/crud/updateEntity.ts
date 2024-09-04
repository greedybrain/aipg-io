"use server";

import {
    TEntityActionResponse,
    TMaybeEntity,
    TTable,
    TTableRow,
    TUpdateEntityArgs,
} from "@/types";

import { EntityService } from "@/models/supabase/entity-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const updateEntity = async <T extends TTable>({
    relation,
    entityId,
    entityName,
    formData,
    selectCriteria,
}: TUpdateEntityArgs<T>): Promise<
    TEntityActionResponse<TMaybeEntity<TTableRow<T>>>
> => {
    try {
        const entityService = new EntityService();
        return await entityService.updateEntity({
            relation,
            entityId,
            entityName,
            formData,
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
