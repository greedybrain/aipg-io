"use server";

import { AIToolTag, TInsertAIToolTag } from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "../_helpers/withTryCatch";

export const server_createAIToolTags = async ({
    aiToolId,
    tagId,
}: TInsertAIToolTag) => {
    const response = await withTryCatch(
        () =>
            db
                .insert(AIToolTag)
                .values({
                    aiToolId,
                    tagId,
                })
                .returning(),
        "Tag assigned to tool successfully",
    );

    if (!response.data) throw new Error(response.message);

    const [aiToolTag] = response.data;

    return {
        ...response,
        data: aiToolTag,
    };
};
