"use client";

import * as dotenv from "dotenv";
import * as schema from "../drizzle/schemas";

import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";

import { Tag } from "../drizzle/schemas/tags";
import { exit } from "process";
import { getErrorMessage } from "../../utils/status-messages/get-error-message";
import postgres from "postgres";
import { tagsData } from "../../utils/data/tags";

dotenv.config();

if (!("SUPABASE_CONNECTION_POOLER" in process.env))
    throw new Error("SUPABASE_CONNECTION_POOLER not found on .env");

const connectionString = process.env.SUPABASE_CONNECTION_POOLER!;
const client = postgres(connectionString, { prepare: false, max: 10 });
const db: PostgresJsDatabase<typeof schema> = drizzle(client, {
    schema,
});

const main = async () => {
    try {
        console.log("Starting tag seeding process...");
        for (const tagObj of tagsData) {
            console.log(`Processing category: ${tagObj.category}`);

            for (const tag of tagObj.tags) {
                try {
                    console.log(`Inserting tag: ${tag}`);

                    await db.insert(Tag).values({
                        category: tagObj.category,
                        categoryLower: tagObj.category.toLocaleLowerCase(),
                        name: tag,
                        nameLower: tag.toLocaleLowerCase(),
                    });
                    console.log(
                        `Added tag: ${tag}, under category: ${tagObj.category}`,
                    );
                } catch (error) {
                    console.log(getErrorMessage(error));
                }
            }
        }
        console.log("Tag seeding process completed.");
    } catch (error) {
        console.log(getErrorMessage(error));
    }
};

main().then(() => exit(1));
