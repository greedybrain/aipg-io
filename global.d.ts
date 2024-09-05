import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from ".";

declare global {
    var _drizzleDb: PostgresJsDatabase<typeof schema> | undefined;
}

export {};
