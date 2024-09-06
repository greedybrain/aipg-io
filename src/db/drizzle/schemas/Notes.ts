import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { Users } from ".";
import { relations } from "drizzle-orm";

export const Notes = pgTable("Notes", {
    id: uuid("id").primaryKey().default(crypto.randomUUID()),
    title: text("title").notNull(),
    content: text("content").notNull(),
    userId: uuid("userId")
        .references(() => Users.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("createdAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updatedAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
});

export const NoteRelations = relations(Notes, ({ one }) => ({
    user: one(Users, {
        fields: [Notes.userId],
        references: [Users.id],
        relationName: "NoteBelongsToOneSpecificUser",
    }),
}));
