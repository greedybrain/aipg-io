"use server";

import { db } from "@/db";
import { withTryCatch } from "../_helpers/withTryCatch";

export const server_readTags = async () => {
    const res = await withTryCatch(
        () =>
            db.query.Tag.findMany({
                orderBy: (fields, { asc }) => asc(fields.name),
            }),
        "Tags found",
    );

    return res.data;
};
