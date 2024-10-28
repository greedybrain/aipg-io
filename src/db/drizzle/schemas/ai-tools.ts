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
import {
    boolean,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uniqueIndex,
    uuid,
} from "drizzle-orm/pg-core";

import { AIToolPriceModel } from "./ai-tool-price-models";
import { AppUser } from "./app-users";

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
    id: uuid("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    developerOrCompanyName: text("developerOrCompanyName").notNull(),
    officialWebsiteURL: text("officialWebsiteURL").notNull(),
    logo: text("logo").notNull(),
    description: text("description").notNull(),
};

const mediaResources = {
    webImages: text("webImages")
        .array()
        .notNull()
        .default(sql`'{}'::text[]`),
    videoURLs: text("videoURLs")
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

const affiliateAndApiResources = {
    apiDocumentationURL: text("apiDocumentationURL").default(""),
    affiliateResourceURL: text("affiliateResourceURL").default(""),
    customAffiliateURL: text("customAffiliateURL").default(""),
};

const admin = {
    createdAt: timestamp("createdAt").defaultNow(),
    creatorId: uuid("creatorId").references(() => AppUser.userId, {
        onDelete: "cascade",
    }),
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
export const AIToolRelations = relations(AITool, ({ one, many }) => ({
    aiToolTags: many(AIToolTag),
    aiToolIntegrations: many(AIToolIntegration),
    aiToolPriceModel: one(AIToolPriceModel),
    creator: one(AppUser, {
        fields: [AITool.creatorId],
        references: [AppUser.userId],
    }),
}));

// Inferences
export type TSelectAIToolBase = InferSelectModel<typeof AITool>;
export type TSelectAIToolWithRelations = InferSelectModel<typeof AITool> & {
    aiToolTags?: TSelectAIToolTagWithRelations[];
    aiToolIntegrations?: TSelectAIToolIntegrationWithRelations[];
};
export type TInsertAITool = InferInsertModel<typeof AITool>;
