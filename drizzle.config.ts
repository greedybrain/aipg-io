import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: [
        "./src/db/drizzle/schemas/users.ts",
        "./src/db/drizzle/schemas/profiles.ts",
        "./src/db/drizzle/schemas/notes.ts",
    ],
    out: "./src/db/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.SUPABASE_CONNECTION_POOLER!,
        port: 6543,
    },
    verbose: true,
    strict: true,
});
