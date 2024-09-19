import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: ["./src/db/drizzle/schemas/app-users.ts"],
    out: "./src/db/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.SUPABASE_CONNECTION_POOLER!,
        port: 6543,
    },
    verbose: true,
    strict: true,
});
