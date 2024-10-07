"use server";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_readIntegrations = async () => {
    const response = await withTryCatch(
        () =>
            db.query.Integration.findMany({
                orderBy: (fields, { asc }) => asc(fields.name),
            }),
        "Integrations found",
    );

    return response;
};
