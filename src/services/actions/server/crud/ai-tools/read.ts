"use server";

import { AITool } from "@/db/drizzle/schemas";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_readAiTools = async () => {
    const response = await withTryCatch(
        () =>
            db.query.AITool.findMany({
                orderBy: (fields, { desc }) => desc(fields.createdAt),
                with: {
                    logo: true,
                    // webImages: true,
                    // tags: true,
                },
            }),
        "AITools found",
    );

    if (!response.data) throw new Error(response.message);

    return response;
};

export const server_readAiTool = async (toolId: string) => {
    const response = await withTryCatch(
        () =>
            db.query.AITool.findFirst({
                where: eq(AITool.id, toolId),
                with: {
                    logo: true,
                    webImages: true,
                    tags: true,
                },
            }),
        "AITool found",
    );

    if (!response.data) throw new Error(response.message);

    return response;
};
