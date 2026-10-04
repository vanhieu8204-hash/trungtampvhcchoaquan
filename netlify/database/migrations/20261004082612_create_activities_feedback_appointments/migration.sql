CREATE TABLE "activities" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"summary" text NOT NULL,
	"content" text NOT NULL,
	"category" text NOT NULL,
	"author" text DEFAULT 'Bộ phận Một cửa xã Hoa Quân' NOT NULL,
	"date" text NOT NULL,
	"views" integer DEFAULT 0,
	"is_pinned" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "appointments" (
	"id" serial PRIMARY KEY,
	"citizen_name" text NOT NULL,
	"phone" text NOT NULL,
	"id_card_number" text NOT NULL,
	"service_type" text NOT NULL,
	"appointment_date" text NOT NULL,
	"appointment_time_slot" text NOT NULL,
	"notes" text,
	"status" text DEFAULT 'Đã tiếp nhận' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "feedback_submissions" (
	"id" serial PRIMARY KEY,
	"citizen_name" text NOT NULL,
	"phone" text NOT NULL,
	"email" text,
	"address" text,
	"topic" text NOT NULL,
	"satisfaction_rating" integer DEFAULT 5 NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
