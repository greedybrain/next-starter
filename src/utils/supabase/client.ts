import { env } from "@/config/env/client";
import { createBrowserClient } from "@supabase/ssr";

export function _createBrowserClient() {
    return createBrowserClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
}
