ALTER TABLE "aiToolCreators" DROP CONSTRAINT "aiToolCreators_userId_appUsers_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiToolCreators" ADD CONSTRAINT "aiToolCreators_userId_appUsers_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."appUsers"("userId") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
