DO $$ BEGIN
 CREATE TYPE "public"."operatingsystemsenum" AS ENUM('Windows', 'macOS', 'Linux', 'iOS', 'Android');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."platformsenum" AS ENUM('Web-based', 'Desktop', 'Mobile');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('DEFAULT', 'ADMIN', 'OWNER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiToolIntegrations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"aiToolId" uuid NOT NULL,
	"integrationId" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiToolTags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"aiToolId" uuid NOT NULL,
	"tagId" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiTools" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"developerOrCompanyName" text NOT NULL,
	"officialWebsiteURL" text NOT NULL,
	"logo" text NOT NULL,
	"description" text NOT NULL,
	"webImages" text[] DEFAULT '{}'::text[] NOT NULL,
	"videoURLs" text[] DEFAULT '{}'::text[] NOT NULL,
	"iosAppURL" text DEFAULT '',
	"androidAppURL" text DEFAULT '',
	"chromeExtensionURL" text DEFAULT '',
	"firefoxAddonURL" text DEFAULT '',
	"edgeExtensionURL" text DEFAULT '',
	"safariExtensionURL" text DEFAULT '',
	"linuxPackageURL" text DEFAULT '',
	"windowsStoreURL" text DEFAULT '',
	"macosAppStoreURL" text DEFAULT '',
	"apkDownloadURL" text DEFAULT '',
	"platforms" platformsenum[] DEFAULT ARRAY['Web-based']::platformsenum[] NOT NULL,
	"operatingSystems" operatingsystemsenum[] DEFAULT ARRAY['Windows','macOS','Linux','iOS','Android']::operatingsystemsenum[] NOT NULL,
	"features" text[] DEFAULT '{}'::text[] NOT NULL,
	"apiDocumentationURL" text DEFAULT '',
	"affiliateResourceURL" text DEFAULT '',
	"customAffiliateURL" text DEFAULT '',
	"createdAt" timestamp DEFAULT now(),
	"creatorId" uuid,
	"updatedAt" timestamp DEFAULT now(),
	"updatedBy" text[] DEFAULT '{}'::text[] NOT NULL,
	"deleted" boolean DEFAULT false,
	"inReview" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "appUsers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"role" "role" DEFAULT 'DEFAULT',
	"avatarUrl" text DEFAULT '',
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	"pastHire" boolean DEFAULT false NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "appUsers_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "integrations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"nameLower" text NOT NULL,
	"branding" text DEFAULT '',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category" text NOT NULL,
	"categoryLower" text NOT NULL,
	"name" text NOT NULL,
	"nameLower" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiToolPriceModels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"aiToolId" uuid NOT NULL,
	"isFreeToUse" boolean DEFAULT false,
	"hasFreeTierOrTrial" boolean DEFAULT false,
	"oneTimePurchasePrice" text DEFAULT '',
	"minPrice" text DEFAULT '',
	"maxPrice" text DEFAULT '',
	"priceInfoURL" text DEFAULT '',
	"promotionDescription" text DEFAULT '',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tiers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"offerings" text[] DEFAULT '{}'::text[],
	"monthlyPrice" text,
	"annualPrice" text,
	"aiToolPriceModelId" uuid,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolIntegrations" ADD CONSTRAINT "aiToolIntegrations_aiToolId_aiTools_id_fk" FOREIGN KEY ("aiToolId") REFERENCES "public"."aiTools"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolIntegrations" ADD CONSTRAINT "aiToolIntegrations_integrationId_integrations_id_fk" FOREIGN KEY ("integrationId") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolTags" ADD CONSTRAINT "aiToolTags_aiToolId_aiTools_id_fk" FOREIGN KEY ("aiToolId") REFERENCES "public"."aiTools"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolTags" ADD CONSTRAINT "aiToolTags_tagId_tags_id_fk" FOREIGN KEY ("tagId") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiTools" ADD CONSTRAINT "aiTools_creatorId_appUsers_userId_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."appUsers"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolPriceModels" ADD CONSTRAINT "aiToolPriceModels_aiToolId_aiTools_id_fk" FOREIGN KEY ("aiToolId") REFERENCES "public"."aiTools"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tiers" ADD CONSTRAINT "tiers_aiToolPriceModelId_aiToolPriceModels_id_fk" FOREIGN KEY ("aiToolPriceModelId") REFERENCES "public"."aiToolPriceModels"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "aiToolNameDeveloperOrCompanyIndex" ON "aiTools" USING btree ("name","developerOrCompanyName");