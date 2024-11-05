"use server";

import { AIToolWebImage, TInsertAIToolWebImage } from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createWebImage = async ({
    toolId,
    imageURL,
}: TInsertAIToolWebImage) => {
    const response = await withTryCatch(async () => {
        return db
            .insert(AIToolWebImage)
            .values({
                toolId,
                imageURL,
            })
            .returning();
    }, "Web Image created successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const server_createWebImages = async (
    toolId: string,
    webImages: string[],
) => {
    for (const webImage of webImages)
        await server_createWebImage({ toolId, imageURL: webImage });
};
