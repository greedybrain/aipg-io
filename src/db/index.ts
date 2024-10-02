import * as schema from "@/db/drizzle/schemas";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.SUPABASE_CONNECTION_POOLER!;

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
