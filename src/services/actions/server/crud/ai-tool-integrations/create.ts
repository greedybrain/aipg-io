"use server";

import {
    AIToolIntegration,
    TInsertAIToolIntegration,
} from "@/db/drizzle/schemas/ai-tool-integrations";
import { and, eq } from "drizzle-orm";

import { TSelectIntegration } from "@/db/drizzle/schemas/integrations";
import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolIntegrations = async ({
    toolId,
    integrationId,
}: TInsertAIToolIntegration) => {
    const response = await withTryCatch(async () => {
        const foundAiToolIntegration =
            await db.query.AIToolIntegration.findFirst({
                where: and(
                    eq(AIToolIntegration.toolId, toolId),
                    eq(AIToolIntegration.integrationId, integrationId),
                ),
            });

        if (foundAiToolIntegration)
            throw new Error("One or more duplicate integration detected");

        return db
            .insert(AIToolIntegration)
            .values({
                toolId,
                integrationId,
            })
            .returning();
    }, "Integration assigned to tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const server_createAiToolIntegrations = async (
    toolId: string,
    integrations: TSelectIntegration[],
) => {
    for (const { id: integrationId } of integrations)
        await server_createAIToolIntegrations({ toolId, integrationId });
};
