"use server";

import {
    AITool,
    TInsertAITool,
    TSelectIntegration,
    TSelectTag,
} from "@/db/drizzle/schemas";

import { TPricingModel } from "@/types/ai-tools";
import { checkIfAuthorized } from "../../auth/authenticate";
import { db } from "@/db";
import { server_createAIToolCreator } from "../ai-tool-creators/create";
import { server_createAIToolLogo } from "../ai-tool-logos/create";
import { server_createAIToolPriceModel } from "../ai-tool-price-models/create";
import { server_createAiToolIntegrations } from "../ai-tool-integrations/create";
import { server_createAiToolTags } from "../ai-tool-tags/create";
import { server_createWebImages } from "../ai-tool-web-images/create";
import { server_readAiTool } from "./read";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAITools = async (
    data: TInsertAITool & {
        logoImageURL: string;
        webImages: string[];
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
            logoImageURL,
            webImages,
            ...restData
        } = data;

        const [tool] = await db
            .insert(AITool)
            .values({
                ...restData,
                inReview: true,
                creatorId: user?.appUser?.userId,
            })
            .returning();

        if (user && user.appUser) {
            await server_createAIToolCreator(user.appUser.userId);
            await server_createAIToolLogo({
                toolId: tool.id,
                imageURL: logoImageURL,
            });
            await server_createWebImages(tool.id, webImages);
            await server_createAiToolTags(tool.id, tags);
            await server_createAiToolIntegrations(tool.id, integrations);
            await server_createAIToolPriceModel({
                toolId: tool.id,
                ...pricingInfo,
            });
        }

        const { success, data: refetchedTool } = await server_readAiTool(
            tool.id,
        );

        if (success) {
            return refetchedTool;
        }

        return undefined;
    }, "AITool created successfully");

    return response;
};
