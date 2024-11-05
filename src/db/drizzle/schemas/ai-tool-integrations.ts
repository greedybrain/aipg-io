import { AITool, TSelectAIToolBase } from "./ai-tools";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { Integration, TSelectIntegration } from "./integrations";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const AIToolIntegration = pgTable("aiToolIntegrations", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    toolId: uuid("toolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    integrationId: uuid("integrationId")
        .references(() => Integration.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolIntegrationRelations = relations(
    AIToolIntegration,
    ({ one }) => ({
        tool: one(AITool, {
            fields: [AIToolIntegration.toolId],
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
    tool?: TSelectAIToolBase;
    integration?: TSelectIntegration;
};
export type TInsertAIToolIntegration = InferInsertModel<
    typeof AIToolIntegration
>;
