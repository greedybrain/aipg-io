import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

import { AITool } from "./ai-tools";
import { AppUser } from "./app-users";

export const AIToolCreator = pgTable("aiToolCreators", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    userId: uuid("userId")
        .references(() => AppUser.userId, { onDelete: "cascade" })
        .notNull(),
});

// Relations
export const AIToolCreatorRelations = relations(
    AIToolCreator,
    ({ one, many }) => ({
        aiTool: many(AITool),
        appUser: one(AppUser, {
            fields: [AIToolCreator.userId],
            references: [AppUser.userId],
        }),
    }),
);

export type TSelectAIToolCreator = InferSelectModel<typeof AIToolCreator>;
export type TInsertAIToolCreator = InferInsertModel<typeof AIToolCreator>;
