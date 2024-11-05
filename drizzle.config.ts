import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: [
        "./src/db/drizzle/schemas/ai-tool-integrations.ts",
        "./src/db/drizzle/schemas/ai-tool-tags.ts",
        "./src/db/drizzle/schemas/ai-tools.ts",
        "./src/db/drizzle/schemas/app-users.ts",
        "./src/db/drizzle/schemas/integrations.ts",
        "./src/db/drizzle/schemas/tags.ts",
        "./src/db/drizzle/schemas/ai-tool-price-models.ts",
        "./src/db/drizzle/schemas/tiers.ts",
        "./src/db/drizzle/schemas/ai-tool-logos.ts",
        "./src/db/drizzle/schemas/ai-tool-web-images.ts",
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
