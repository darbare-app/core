import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export default sqliteTable("users", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  first_name: text("first_name", { length: 255 }).notNull(),
  last_name: text("last_name", { length: 255 }).notNull(),
  phone_number: text("phone_number", { length: 15 }).unique(),
  email: text("email", { length: 255 }).unique().notNull(),
  password: text({ length: 255 }).notNull(),
  profile_picture: text(),
  created_at: integer({ mode: "timestamp_ms" }),
  updated_at: integer({ mode: "timestamp_ms" }),
});
