"use server";

import { TAuthActionResponse, TAuthResetCtx } from "@/types";

import { UPDATE_PASSWORD_ROUTE } from "@/constants";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";
import { headers } from "next/headers";

export const server_resetPassword = async (
    resetCtx: TAuthResetCtx,
): Promise<TAuthActionResponse> => {
    try {
        const supabase = createClient();

        const origin = headers().get("origin");

        const { email } = resetCtx;
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${origin}${UPDATE_PASSWORD_ROUTE}`,
        });

        if (error) {
            const errorMessage = error.code
                ? authErrorMessages[error.code] || error.message
                : error.message;

            throw new Error(errorMessage);
        }

        return {
            success: true,
            message: `We sent a password reset link to ${email}`,
            user: { authUser: undefined, appUser: undefined },
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: { authUser: undefined, appUser: undefined },
        };
    }
};
