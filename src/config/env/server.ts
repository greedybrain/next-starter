import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]),
        SITE_URL: z.string(),
        // DATABASE_URL: z.string().url().min(1),
        DATABASE_URL: z.string().min(1),
        OPEN_AI_API_KEY: z.string().min(1),
        SUPABASE_URL: z.string().url(),
        SUPABASE_ANON_KEY: z.string(),
    },

    onValidationError: (issues) => {
        console.error("❌ Invalid environment variables:", issues);
        throw new Error("Invalid environment variables");
    },
    onInvalidAccess: () => {
        throw new Error(
            "❌ Attempted to access a server-side environment variable on the client"
        );
    },

    emptyStringAsUndefined: true,
    // eslint-disable-next-line n/no-process-env
    experimental__runtimeEnv: process.env,
});
