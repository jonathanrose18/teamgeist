ALTER TABLE "club" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "club" DROP COLUMN "slug";--> statement-breakpoint
ALTER TABLE "club" DROP COLUMN "initialized";