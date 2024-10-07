"use server";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_readTags = async () => {
    const response = await withTryCatch(
        () =>
            db.query.Tag.findMany({
                orderBy: (fields, { asc }) => asc(fields.name),
            }),
        "Tags found",
    );

    return response;
};
