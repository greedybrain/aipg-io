import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { Notes } from "./Notes";
import { pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const roleEnum = pgEnum("role", ["DEFAULT", "ADMIN", "OWNER"]);

export const Users = pgTable("Users", {
    id: uuid("id").primaryKey().default(crypto.randomUUID()),
    email: text("email").notNull(),
    name: text("name").notNull(),
    role: roleEnum("role").default("DEFAULT"),
    createdAt: timestamp("createdAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updatedAt", {
        mode: "date",
        withTimezone: true,
    }).defaultNow(),
});

export const UserRelations = relations(Users, ({ many, one }) => ({
    notes: many(Notes, {
        relationName: "UserHasManyNotes",
    }),
}));
