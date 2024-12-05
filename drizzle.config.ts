import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schemas/user.ts",
  out: "./drizzle",
});
