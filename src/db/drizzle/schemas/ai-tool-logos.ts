import { AITool, TSelectAIToolBase } from "./ai-tools";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const AIToolLogo = pgTable("aiToolLogos", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    toolId: uuid("toolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    imageURL: text("imageURL").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolLogoRelations = relations(AIToolLogo, ({ one }) => ({
    tool: one(AITool, {
        fields: [AIToolLogo.toolId],
        references: [AITool.id],
    }),
}));

export type TSelectAIToolLogo = InferSelectModel<typeof AIToolLogo>;
export type TSelectAIToolLogoWithRelations = InferSelectModel<
    typeof AIToolLogo
> & {
    tool?: TSelectAIToolBase;
};
export type TInsertAIToolLogo = InferInsertModel<typeof AIToolLogo>;
