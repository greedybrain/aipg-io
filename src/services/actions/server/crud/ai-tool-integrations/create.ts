"use server";

import {
    AIToolIntegration,
    TInsertAIToolIntegration,
    TSelectIntegration,
} from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolIntegrations = async ({
    aiToolId,
    integrationId,
}: TInsertAIToolIntegration) => {
    const response = await withTryCatch(async () => {
        const foundAiToolIntegration =
            await db.query.AIToolIntegration.findFirst({
                where: (fields, { and, eq }) =>
                    and(
                        eq(fields.aiToolId, aiToolId),
                        eq(fields.integrationId, integrationId),
                    ),
            });

        if (foundAiToolIntegration)
            throw new Error("One or more duplicate integration detected");

        return db
            .insert(AIToolIntegration)
            .values({
                aiToolId,
                integrationId,
            })
            .returning();
    }, "Integration assigned to tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const createAiToolIntegrations = async (
    aiToolId: string,
    integrations: TSelectIntegration[],
) => {
    for (const { id: integrationId } of integrations)
        await server_createAIToolIntegrations({ aiToolId, integrationId });
};
