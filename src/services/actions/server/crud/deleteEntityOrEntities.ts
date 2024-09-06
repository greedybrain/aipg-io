"use server";

import {
    TDeleteEntityArgs,
    TEntityActionResponse,
    TMaybeEntity,
    TTable,
    TTableRow,
} from "@/types";

import { EntityService } from "../../../../models/entity-service";
import { getErrorMessage } from "../../../../utils/status-messages/get-error-message";

export const deleteEntityOrEntities = async <T extends TTable>({
    relation,
    entityIds,
    entityName,
    selectCriteria,
}: TDeleteEntityArgs<T>): Promise<
    TEntityActionResponse<
        TMaybeEntity<TTableRow<T>> | TMaybeEntity<TTableRow<T>[]>
    >
> => {
    try {
        const entityService = new EntityService();
        return await entityService.deleteEntityOrEntities({
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
