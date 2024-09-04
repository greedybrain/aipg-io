import { Database } from "@/types/database.types";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient<Database>(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
    );
}
