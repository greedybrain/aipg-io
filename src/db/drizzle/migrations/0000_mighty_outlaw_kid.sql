DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('DEFAULT', 'ADMIN', 'OWNER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "appUsers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"role" "role" DEFAULT 'DEFAULT',
	"avatarUrl" text,
	"createdAt" timestamp with time zone DEFAULT now(),
	"updatedAt" timestamp with time zone DEFAULT now(),
	"pastHire" boolean DEFAULT false NOT NULL,
	"userId" text NOT NULL,
	CONSTRAINT "appUsers_userId_unique" UNIQUE("userId")
);
