"use server";

import { AIToolCreator } from "@/db/drizzle/schemas";
import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolCreator = async (userId: string) => {
    const response = await withTryCatch(async () => {
        return db
            .insert(AIToolCreator)
            .values({
                userId,
            })
            .returning();
    }, "AI tool creator assigned to tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};
