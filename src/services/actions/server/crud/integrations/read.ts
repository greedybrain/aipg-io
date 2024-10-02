"use server";

import { db } from "@/db";
import { withTryCatch } from "../_helpers/withTryCatch";

export const server_readIntegrations = async () => {
    const res = await withTryCatch(
        () =>
            db.query.Integration.findMany({
                orderBy: (fields, { asc }) => asc(fields.name),
            }),
        "Integrations found",
    );

    return res.data;
};
