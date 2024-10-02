import { AITool, TSelectAIToolBase } from "./ai-tools";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { TSelectTag, Tag } from "./tags";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const AIToolTag = pgTable("aiToolTags", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    aiToolId: text("aiToolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    tagId: text("tagId")
        .references(() => Tag.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolTagRelations = relations(AIToolTag, ({ one }) => ({
    aiTool: one(AITool, {
        fields: [AIToolTag.aiToolId],
        references: [AITool.id],
    }),
    tag: one(Tag, {
        fields: [AIToolTag.tagId],
        references: [Tag.id],
    }),
}));

export type TSelectAIToolTagBase = InferSelectModel<typeof AIToolTag>;
export type TSelectAIToolTagWithRelations = InferSelectModel<
    typeof AIToolTag
> & {
    aiTool?: TSelectAIToolBase;
    tagBase?: TSelectTag;
    tagPartial: Pick<TSelectTag, "id" | "name" | "category">;
};
export type TInsertAIToolTag = InferInsertModel<typeof AIToolTag>;
