"use server";

import { AIToolTag, TInsertAIToolTag, TSelectTag } from "@/db/drizzle/schemas";
import { and, eq } from "drizzle-orm";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createAIToolTag = async ({
    aiToolId,
    tagId,
}: TInsertAIToolTag) => {
    const response = await withTryCatch(async () => {
        const foundAiToolTag = await db.query.AIToolTag.findFirst({
            where: and(
                eq(AIToolTag.aiToolId, aiToolId),
                eq(AIToolTag.tagId, tagId),
            ),
        });

        if (foundAiToolTag)
            throw new Error("One or more duplicate tag detected");

        return db
            .insert(AIToolTag)
            .values({
                aiToolId,
                tagId,
            })
            .returning();
    }, "Tag assigned to tool successfully");

    if (!response.data) throw new Error(response.message);

    return response;
};

export const createAiToolTags = async (
    aiToolId: string,
    tags: TSelectTag[],
) => {
    for (const { id: tagId } of tags)
        await server_createAIToolTag({ aiToolId, tagId });
};
