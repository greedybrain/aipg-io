"use server";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_readAiTools = async () => {
    const response = await withTryCatch(
        () =>
            db.query.AITool.findMany({
                orderBy: (fields, { desc }) => desc(fields.createdAt),
            }),
        "AITools found",
    );

    if (!response.data) throw new Error(response.message);

    return response;
};
