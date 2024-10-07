import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { AIToolPriceModel } from "./ai-tool-price-models";

export const Tier = pgTable("tiers", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    description: text("description").notNull(),
    offerings: text("offerings")
        .array()
        .default(sql`'{}'::text[]`),
    monthlyPrice: text("monthlyPrice"),
    annualPrice: text("annualPrice"),
    aiToolPriceModelId: uuid("aiToolPriceModelId").references(
        () => AIToolPriceModel.id,
        { onDelete: "cascade" },
    ),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const TierRelations = relations(Tier, ({ one }) => ({
    aiToolPriceModel: one(AIToolPriceModel, {
        fields: [Tier.aiToolPriceModelId],
        references: [AIToolPriceModel.id],
    }),
}));

export type TSelectTier = InferSelectModel<typeof Tier>;
export type TInsertTier = InferInsertModel<typeof Tier>;
