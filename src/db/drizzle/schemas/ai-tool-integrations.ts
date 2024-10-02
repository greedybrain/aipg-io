import { AITool, TSelectAIToolBase } from "./ai-tools";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { Integration, TSelectIntegration } from "./integrations";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const AIToolIntegration = pgTable("aiToolIntegrations", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    aiToolId: text("aiToolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    integrationId: text("integrationId")
        .references(() => Integration.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolIntegrationRelations = relations(
    AIToolIntegration,
    ({ one }) => ({
        aiTool: one(AITool, {
            fields: [AIToolIntegration.aiToolId],
            references: [AITool.id],
        }),
        integration: one(Integration, {
            fields: [AIToolIntegration.integrationId],
            references: [Integration.id],
        }),
    }),
);

export type TSelectAIToolIntegrationBase = InferSelectModel<
    typeof AIToolIntegration
>;
export type TSelectAIToolIntegrationWithRelations = InferSelectModel<
    typeof AIToolIntegration
> & {
    aiTool?: TSelectAIToolBase;
    integration?: TSelectIntegration;
};
export type TInsertAIToolIntegration = InferInsertModel<
    typeof AIToolIntegration
>;
