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
CREATE TABLE IF NOT EXISTS "aiToolIntegrations" (
	"id" text PRIMARY KEY NOT NULL,
	"aiToolId" text NOT NULL,
	"integrationId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiToolTags" (
	"id" text PRIMARY KEY NOT NULL,
	"aiToolId" text NOT NULL,
	"tagId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiTools" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"developerOrCompanyName" text NOT NULL,
	"officialWebsite" text NOT NULL,
	"logo" text NOT NULL,
	"description" text NOT NULL,
	"webImages" text[] DEFAULT '{}'::text[] NOT NULL,
	"videoUrls" text[] DEFAULT '{}'::text[] NOT NULL,
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
	"pricingModel" jsonb DEFAULT '{
                "userId": null,
                "email": null,
                "name": null,
                "pastHire": false,
                "role": "DEFAULT"
            }'::jsonb NOT NULL,
	"linkToPricingInfo" text DEFAULT '',
	"platforms" platformsenum[] DEFAULT ARRAY['Web-based']::platformsenum[] NOT NULL,
	"operatingSystems" operatingsystemsenum[] DEFAULT ARRAY['Windows','macOS','Linux','iOS','Android']::operatingsystemsenum[] NOT NULL,
	"features" text[] DEFAULT '{}'::text[] NOT NULL,
	"apiResource" text DEFAULT '',
	"affiliateOrPartnershipResource" text DEFAULT '',
	"customAffiliateLink" text DEFAULT '',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"updatedBy" text[] DEFAULT '{}'::text[] NOT NULL,
	"deleted" boolean DEFAULT false,
	"inReview" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "integrations" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"nameLower" text NOT NULL,
	"branding" text DEFAULT '',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" text PRIMARY KEY NOT NULL,
	"category" text NOT NULL,
	"categoryLower" text NOT NULL,
	"name" text NOT NULL,
	"nameLower" text NOT NULL,
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
CREATE UNIQUE INDEX IF NOT EXISTS "aiToolNameDeveloperOrCompanyIndex" ON "aiTools" USING btree ("name","developerOrCompanyName");