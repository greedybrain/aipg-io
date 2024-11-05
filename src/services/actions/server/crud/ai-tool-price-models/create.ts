"use server";

import {
    AIToolPriceModel,
    TInsertAIToolPriceModel,
    TInsertTier,
} from "@/db/drizzle/schemas";

import { db } from "@/db";
import { server_createTiers } from "../tiers/create";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolPriceModel = async ({
    toolId,
    tiers,
    ...restPriceModel
}: TInsertAIToolPriceModel & { tiers?: TInsertTier[] }) => {
    const response = await withTryCatch(async () => {
        const [priceModel] = await db
            .insert(AIToolPriceModel)
            .values({
                toolId,
                ...restPriceModel,
            })
            .returning();

        tiers &&
            !!tiers.length &&
            (await server_createTiers(priceModel.id, tiers));

        return priceModel;
    }, "Price model created for tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};
