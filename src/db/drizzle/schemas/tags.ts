import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { AIToolTag } from "./ai-tool-tags";

export const Tag = pgTable("tags", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    category: text("category").notNull(),
    categoryLower: text("categoryLower").notNull(),
    name: text("name").notNull(),
    nameLower: text("nameLower").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const TagRelations = relations(Tag, ({ many }) => ({
    toolTags: many(AIToolTag),
}));

export type TSelectTag = InferSelectModel<typeof Tag>;
export type TInsertTag = InferInsertModel<typeof Tag>;
