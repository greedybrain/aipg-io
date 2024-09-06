"use server";

import {
    TCreateEntityArgs,
    TEntityActionResponse,
    TMaybeEntity,
    TTable,
    TTableRow,
} from "@/types";

import { EntityService } from "@/models/entity-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const createEntityOrEntities = async <T extends TTable>({
    relation,
    entityName,
    formData,
    selectCriteria,
}: TCreateEntityArgs<T>): Promise<
    TEntityActionResponse<
        TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
    >
> => {
    try {
        const entityService = new EntityService();
        return await entityService.createEntityOrEntities({
            relation,
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
