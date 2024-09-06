DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('DEFAULT', 'ADMIN', 'OWNER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"id" uuid PRIMARY KEY DEFAULT 'e190e4f2-d178-4044-acd3-d898ea1313b7' NOT NULL,
	"email" text DEFAULT '' NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"role" "role" DEFAULT 'DEFAULT',
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Profiles" (
	"id" uuid PRIMARY KEY DEFAULT '9bfa45f7-8deb-4029-bec0-7b4291936773' NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"username" text DEFAULT '' NOT NULL,
	"bio" text DEFAULT '' NOT NULL,
	"userId" uuid,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "Profiles_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Notes" (
	"id" uuid PRIMARY KEY DEFAULT '7b230ac2-4ba8-4ffd-8fee-e4c8f0b5c534' NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"content" text DEFAULT '' NOT NULL,
	"userId" uuid NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_userId_Users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_Users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
