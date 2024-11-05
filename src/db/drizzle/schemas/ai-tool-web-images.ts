import { AITool, TSelectAIToolBase } from "./ai-tools";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const AIToolWebImage = pgTable("aiToolWebImages", {
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
export const AIToolWebImageRelations = relations(AIToolWebImage, ({ one }) => ({
    tool: one(AITool, {
        fields: [AIToolWebImage.toolId],
        references: [AITool.id],
    }),
}));

export type TSelectAIToolWebImage = InferSelectModel<typeof AIToolWebImage>;
export type TSelectAIToolWebImageWithRelations = InferSelectModel<
    typeof AIToolWebImage
> & {
    tool?: TSelectAIToolBase;
};
export type TInsertAIToolWebImage = InferInsertModel<typeof AIToolWebImage>;
