"use server";

import { AITool } from "@/db/drizzle/schemas";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export type TReadAIToolOrAITools = {
    withLogo: true | undefined;
    withWebImages: true | undefined;
    withTags: {
        included: true | undefined;
        withTag: true | undefined;
    };
    withPriceModel: {
        included: true | undefined;
        withTiers: true | undefined;
    };
};

export const server_readAiTools = async ({
    withLogo,
    withPriceModel,
    withTags,
    withWebImages,
}: TReadAIToolOrAITools) => {
    const response = await withTryCatch(() => {
        const builtWith = {
            toolLogo: withLogo,
            webImages: withWebImages,
            tags: withTags.included
                ? {
                      with: {
                          tag: withTags.withTag,
                      },
                  }
                : undefined,
            priceModel: withPriceModel.included
                ? {
                      with: {
                          tiers: withPriceModel.withTiers,
                      },
                  }
                : undefined,
        };

        return db.query.AITool.findMany({
            orderBy: (fields, { desc }) => desc(fields.createdAt),
            with: builtWith,
        });
    }, "AITools found");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const server_readAiTool = async (toolId: string) => {
    const response = await withTryCatch(
        () =>
            db.query.AITool.findFirst({
                where: eq(AITool.id, toolId),
                with: {
                    toolLogo: true,
                    webImages: true,
                    tags: true,
                },
            }),
        "AITool found",
    );

    if (!response.data) throw new Error(response.message);

    return response;
};
