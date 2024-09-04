import * as schema from ".";

import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";

const connectionString = process.env.SUPABASE_CONNECTION_POOLER!;

const client = postgres(connectionString, { prepare: false });

export const db: PostgresJsDatabase<typeof schema> = drizzle(client, {
    schema,
});
