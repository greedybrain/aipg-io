import {
    AIToolIntegration,
    TSelectAIToolIntegrationWithRelations,
} from "./ai-tool-integrations";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const Integration = pgTable("integrations", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    nameLower: text("nameLower").notNull(),
    branding: text("branding").default(""),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const IntegrationRelations = relations(Integration, ({ many }) => ({
    aiToolIntegrations: many(AIToolIntegration),
}));
export type TSelectIntegration = InferSelectModel<typeof Integration>;
export type TSelectIntegrationWithRelations = InferSelectModel<
    typeof Integration
> & {
    aiToolIntegrations?: TSelectAIToolIntegrationWithRelations[];
};
export type TInsertIntegration = InferInsertModel<typeof Integration>;
