import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { Users } from ".";
import { relations } from "drizzle-orm";

export const Profiles = pgTable("Profiles", {
    id: uuid("id").primaryKey().default(crypto.randomUUID()),
    email: text("title").notNull(),
    username: text("username").unique().notNull(),
    bio: text("bio").default(""),
    userId: uuid("userId").references(() => Users.id, {
        onDelete: "cascade",
    }),
    createdAt: timestamp("createdAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updatedAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
});

export const ProfileRelations = relations(Profiles, ({ one }) => ({
    user: one(Users, {
        fields: [Profiles.userId],
        references: [Users.id],
        relationName: "ProfileBelongsToOneSpecificUser",
    }),
}));
