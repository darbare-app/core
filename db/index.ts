import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schemas/user";

export default drizzle(process.env.DB, { schema });
