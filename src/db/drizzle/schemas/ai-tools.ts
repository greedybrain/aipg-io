import {
    AIToolIntegration,
    TSelectAIToolIntegrationWithRelations,
} from "./ai-tool-integrations";
import { AIToolTag, TSelectAIToolTagWithRelations } from "./ai-tool-tags";
import {
    InferInsertModel,
    InferSelectModel,
    relations,
    sql,
} from "drizzle-orm";
import { TCreatedBy, TPricingModel } from "@/types/ai-tools";
import {
    boolean,
    jsonb,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uniqueIndex,
} from "drizzle-orm/pg-core";

export const platformsEnum = pgEnum("platformsenum", [
    "Web-based",
    "Desktop",
    "Mobile",
]);
export const operatingSystemsEnum = pgEnum("operatingsystemsenum", [
    "Windows",
    "macOS",
    "Linux",
    "iOS",
    "Android",
]);

const metadata = {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    developerOrCompanyName: text("developerOrCompanyName").notNull(),
    officialWebsite: text("officialWebsite").notNull(),
    logo: text("logo").notNull(),
    description: text("description").notNull(),
};

const mediaResources = {
    webImages: text("webImages")
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
    videoUrls: text("videoUrls")
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
};

const appAndExtensions = {
    iosAppURL: text("iosAppURL").default(""),
    androidAppURL: text("androidAppURL").default(""),
    chromeExtensionURL: text("chromeExtensionURL").default(""),
    firefoxAddonURL: text("firefoxAddonURL").default(""),
    edgeExtensionURL: text("edgeExtensionURL").default(""),
    safariExtensionURL: text("safariExtensionURL").default(""),
    linuxPackageURL: text("linuxPackageURL").default(""),
    windowsStoreURL: text("windowsStoreURL").default(""),
    macosAppStoreURL: text("macosAppStoreURL").default(""),
    apkDownloadURL: text("apkDownloadURL").default(""),
};

const technicalDetails = {
    platforms: platformsEnum("platforms")
        .array()
        .notNull()
        .default(sql`ARRAY['Web-based']::platformsenum[]`),
    operatingSystems: operatingSystemsEnum("operatingSystems")
        .array()
        .notNull()
        .default(
            sql`ARRAY['Windows','macOS','Linux','iOS','Android']::operatingsystemsenum[]`,
        ),
    features: text("features")
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
};

const pricing = {
    pricingModel: jsonb("pricingModel")
        .$type<TPricingModel>()
        .notNull()
        .default(
            sql`'{
            "isFreeToUse": false,
            "hasFreeTierOrTrial": false,
            "oneTimePurchasePrice": null,
            "promotionDescription": null,
            "tiers": []
        }'::jsonb`,
        ),
    linkToPricingInfo: text("linkToPricingInfo").default(""),
};

const affiliateAndApiResources = {
    apiResource: text("apiResource").default(""),
    affiliateOrPartnershipResource: text(
        "affiliateOrPartnershipResource",
    ).default(""),
    customAffiliateLink: text("customAffiliateLink").default(""),
};

const admin = {
    createdAt: timestamp("createdAt").defaultNow(),
    createdBy: jsonb("pricingModel")
        .$type<TCreatedBy>()
        .notNull()
        .default(
            sql`'{
                "userId": null,
                "email": null,
                "name": null,
                "pastHire": false,
                "role": "DEFAULT"
            }'::jsonb`,
        ),
    updatedAt: timestamp("updatedAt").defaultNow(),
    updatedBy: text("updatedBy")
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
    deleted: boolean("deleted").default(false),
    inReview: boolean("inReview").default(true),
};

export const AITool = pgTable(
    "aiTools",
    {
        ...metadata,
        ...mediaResources,
        ...appAndExtensions,
        ...pricing,
        ...technicalDetails,
        ...affiliateAndApiResources,
        ...admin,
    },
    (table) => ({
        aiToolNameIndex: uniqueIndex("aiToolNameDeveloperOrCompanyIndex").on(
            table.name,
            table.developerOrCompanyName,
        ),
    }),
);

// Relations
export const AIToolRelations = relations(AITool, ({ many }) => ({
    aiToolTags: many(AIToolTag),
    aiToolIntegrations: many(AIToolIntegration),
}));

// Inferences
export type TSelectAIToolBase = InferSelectModel<typeof AITool>;
export type TSelectAIToolWithRelations = InferSelectModel<typeof AITool> & {
    aiToolTags?: TSelectAIToolTagWithRelations[];
    aiToolIntegrations?: TSelectAIToolIntegrationWithRelations[];
};
export type TInsertAITool = InferInsertModel<typeof AITool>;
