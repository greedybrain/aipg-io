"use server";

import { AuthService } from "@/models/supabase/auth-service";
import { Provider } from "@supabase/supabase-js";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const oauth = async (provider: Provider) => {
    try {
        const authService = new AuthService();
        const { url, success, message } = await authService.oauth(provider);

        return {
            success,
            message,
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
