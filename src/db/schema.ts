import { pgTable, serial, varchar, text, timestamp, integer } from "drizzle-orm/pg-core";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 32 }).notNull(), // paint | event | general
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  email: varchar("email", { length: 120 }),
  category: varchar("category", { length: 120 }),
  eventType: varchar("event_type", { length: 120 }),
  eventDate: varchar("event_date", { length: 64 }),
  venue: varchar("venue", { length: 200 }),
  guests: varchar("guests", { length: 64 }),
  budget: varchar("budget", { length: 64 }),
  quantity: varchar("quantity", { length: 120 }),
  location: varchar("location", { length: 200 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
