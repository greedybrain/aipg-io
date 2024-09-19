"use server";

import { Provider } from "@supabase/supabase-js";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";
import { headers } from "next/headers";

export const oauth = async (provider: Provider) => {
    try {
        const supabase = createClient();

        const origin = headers().get("origin");

        const {
            data: { url },
            error,
        } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            if (error.code) {
                throw new Error(authErrorMessages[error.code]);
            } else {
                throw new Error(error.message);
            }
        }

        const capitalizedProvider =
            provider.charAt(0).toLocaleUpperCase() + provider.slice(1);

        if (!url)
            throw new Error(`Failed to sign in with ${capitalizedProvider}`);

        return {
            success: true,
            message: "",
            url,
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            url: undefined,
        };
    }
};
