import * as schema from "@/db/drizzle/schemas";
import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.SUPABASE_CONNECTION_POOLER!;

globalThis._drizzleDb =
    globalThis._drizzleDb ||
    (() => {
        const client = postgres(connectionString, { prepare: false });
        return drizzle(client, { schema });
    })();

export const db: PostgresJsDatabase<typeof schema> = globalThis._drizzleDb!;
