import { AITool, TSelectAIToolBase } from "./ai-tools";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { TSelectTag, Tag } from "./tags";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const AIToolTag = pgTable("aiToolTags", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    toolId: uuid("toolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    tagId: uuid("tagId")
        .references(() => Tag.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolTagRelations = relations(AIToolTag, ({ one }) => ({
    tool: one(AITool, {
        fields: [AIToolTag.toolId],
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
    tool?: TSelectAIToolBase;
    tag?: TSelectTag;
    tagPartial: Pick<TSelectTag, "id" | "name" | "category">;
};
export type TInsertAIToolTag = InferInsertModel<typeof AIToolTag>;
