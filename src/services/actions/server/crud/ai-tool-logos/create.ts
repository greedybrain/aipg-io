"use server";

import { AIToolLogo, TInsertAIToolLogo } from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolLogo = async ({
    toolId,
    imageURL,
}: TInsertAIToolLogo) => {
    const response = await withTryCatch(async () => {
        return db
            .insert(AIToolLogo)
            .values({
                toolId,
                imageURL,
            })
            .returning();
    }, "Logo created successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};
