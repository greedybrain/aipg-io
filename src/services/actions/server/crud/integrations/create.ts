"use server";

import { Integration, TInsertIntegration } from "@/db/drizzle/schemas";

import { db } from "@/db";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_createIntegration = async ({
    name,
    branding,
}: TInsertIntegration) => {
    const response = await withTryCatch(
        () =>
            db
                .insert(Integration)
                .values({
                    name,
                    nameLower: name.toLocaleLowerCase(),
                    branding,
                })
                .returning(),
        "Integration created",
    );

    if (!response.data) throw new Error(response.message);

    const [integration] = response.data;

    return {
        ...response,
        data: integration,
    };
};
