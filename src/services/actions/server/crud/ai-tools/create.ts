"use server";

import {
    AITool,
    TInsertAITool,
    TSelectIntegration,
    TSelectTag,
} from "@/db/drizzle/schemas";

import { TPricingModel } from "@/types/ai-tools";
import { checkIfAuthorized } from "../../auth/authenticate";
import { createAiToolIntegrations } from "../ai-tool-integrations/create";
import { createAiToolTags } from "../ai-tool-tags/create";
import { db } from "@/db";
import { server_createAIToolCreator } from "../ai-tool-creators/create";
import { server_createAIToolPriceModel } from "../ai-tool-price-models/create";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAITools = async (
    data: TInsertAITool & {
        integrations: TSelectIntegration[];
        tags: TSelectTag[];
        pricingInfo: TPricingModel;
    },
) => {
    const response = await withTryCatch(async () => {
        const { data: user } = await checkIfAuthorized();

        const {
            pricingInfo,
            integrations,
            tags,
            updatedBy,
            webImages,
            ...restData
        } = data;

        const [aiTool] = await db
            .insert(AITool)
            .values({
                ...restData,
                inReview: true,
                creatorId: user?.appUser?.userId,
            })
            .returning();

        if (user && user.appUser) {
            await server_createAIToolCreator(user.appUser.userId);
            await createAiToolTags(aiTool.id, tags);
            await createAiToolIntegrations(aiTool.id, integrations);
            await server_createAIToolPriceModel({
                aiToolId: aiTool.id,
                ...pricingInfo,
            });
        }

        return aiTool;
    }, "AITool created successfully");

    return response;
};
