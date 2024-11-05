"use server";

import { TInsertTier, Tier } from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createTier = async ({
    toolPriceModelId,
    ...tier
}: TInsertTier) => {
    const response = await withTryCatch(async () => {
        return db
            .insert(Tier)
            .values({
                toolPriceModelId,
                annualPrice: tier.annualPrice,
                description: tier.description,
                monthlyPrice: tier.monthlyPrice,
                name: tier.name,
                offerings: tier.offerings,
            })
            .returning();
    }, "Tier created for price model successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const server_createTiers = async (
    toolPriceModelId: string,
    tiers: TInsertTier[],
) => {
    for (const tier of tiers)
        await server_createTier({ toolPriceModelId, ...tier });
};
