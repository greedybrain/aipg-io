ALTER TABLE "Users" ALTER COLUMN "id" SET DEFAULT '893f785c-628e-4155-9400-e03c325ee38c';--> statement-breakpoint
ALTER TABLE "Users" ALTER COLUMN "email" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Users" ALTER COLUMN "name" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Profiles" ALTER COLUMN "id" SET DEFAULT 'fb39574a-4a22-4b5d-b74c-bee33454d62a';--> statement-breakpoint
ALTER TABLE "Profiles" ALTER COLUMN "title" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Profiles" ALTER COLUMN "username" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Profiles" ALTER COLUMN "bio" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Notes" ALTER COLUMN "id" SET DEFAULT 'f9b3f0d2-9549-4022-abaa-ca947fd4cf81';--> statement-breakpoint
ALTER TABLE "Notes" ALTER COLUMN "title" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Notes" ALTER COLUMN "content" DROP DEFAULT;