import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { TSelectTier, Tier } from "./tiers";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { AITool } from "./ai-tools";

export const AIToolPriceModel = pgTable("aiToolPriceModels", {
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    toolId: uuid("toolId")
        .references(() => AITool.id, { onDelete: "cascade" })
        .notNull(),
    isFreeToUse: boolean("isFreeToUse").default(false),
    hasFreeTierOrTrial: boolean("hasFreeTierOrTrial").default(false),
    oneTimePurchasePrice: text("oneTimePurchasePrice").default(""),
    minPrice: text("minPrice").default(""),
    maxPrice: text("maxPrice").default(""),
    priceInfoURL: text("priceInfoURL").default(""),
    promotionDescription: text("promotionDescription").default(""),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const AIToolPriceModelRelations = relations(
    AIToolPriceModel,
    ({ one, many }) => ({
        tool: one(AITool, {
            fields: [AIToolPriceModel.toolId],
            references: [AITool.id],
        }),
        tiers: many(Tier),
    }),
);

export type TSelectAIToolPriceModel = InferSelectModel<
    typeof AIToolPriceModel
> & {
    tiers?: TSelectTier[];
};
export type TInsertAIToolPriceModel = InferInsertModel<typeof AIToolPriceModel>;
