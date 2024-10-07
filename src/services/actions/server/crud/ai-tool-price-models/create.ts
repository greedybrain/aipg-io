"use server";

import {
    AIToolPriceModel,
    TInsertAIToolPriceModel,
    TInsertTier,
} from "@/db/drizzle/schemas";

import { createTiers } from "../tiers/create";
import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolPriceModel = async ({
    aiToolId,
    tiers,
    ...restPriceModel
}: TInsertAIToolPriceModel & { tiers?: TInsertTier[] }) => {
    const response = await withTryCatch(async () => {
        const [priceModel] = await db
            .insert(AIToolPriceModel)
            .values({
                aiToolId,
                ...restPriceModel,
            })
            .returning();

        tiers && !!tiers.length && (await createTiers(priceModel.id, tiers));

        return priceModel;
    }, "Price model created for tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};
