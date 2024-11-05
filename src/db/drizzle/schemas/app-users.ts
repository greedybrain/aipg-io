import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { AITool } from "./ai-tools";
import { pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["DEFAULT", "ADMIN", "OWNER"]);

export const AppUser = pgTable("appUsers", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    email: text("email").notNull(),
    name: text("name").notNull(),
    role: roleEnum("role").default("DEFAULT"),
    avatarUrl: text("avatarUrl").default(""),
    createdAt: timestamp("createdAt", {
        mode: "string",
        withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updatedAt", {
        mode: "string",
        withTimezone: true,
    }).defaultNow(),
    pastHire: boolean("pastHire").notNull().default(false),
    userId: uuid("userId").unique().notNull(),
});

export const AppUserRelations = relations(AppUser, ({ many }) => ({
    toolsCreated: many(AITool),
}));

// Inferences
export type TSelectAppUser = InferSelectModel<typeof AppUser>;
export type TInsertAppUser = InferInsertModel<typeof AppUser>;
