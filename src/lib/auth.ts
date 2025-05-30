import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import  db  from "@/db"; // your drizzle instance
import { account, session, user, verification } from "@/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "mysql", "sqlite"
        schema: { user, account, session, verification }
    }),
    emailAndPassword: {
        enabled: true,
        autoSignin: false,
        requireEmailVerification: false,
        minPasswordLength: 6
    }
});