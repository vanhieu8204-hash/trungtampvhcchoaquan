import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const activities = pgTable("activities", {
  id: serial().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull().default("Bộ phận Một cửa xã Hoa Quân"),
  date: text("date").notNull(),
  views: integer("views").default(0),
  isPinned: integer("is_pinned").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const feedbackSubmissions = pgTable("feedback_submissions", {
  id: serial().primaryKey(),
  citizenName: text("citizen_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  address: text("address"),
  topic: text("topic").notNull(),
  satisfactionRating: integer("satisfaction_rating").notNull().default(5),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const appointments = pgTable("appointments", {
  id: serial().primaryKey(),
  citizenName: text("citizen_name").notNull(),
  phone: text("phone").notNull(),
  idCardNumber: text("id_card_number").notNull(),
  serviceType: text("service_type").notNull(),
  appointmentDate: text("appointment_date").notNull(),
  appointmentTimeSlot: text("appointment_time_slot").notNull(),
  notes: text("notes"),
  status: text("status").notNull().default("Đã tiếp nhận"),
  createdAt: timestamp("created_at").defaultNow(),
});
