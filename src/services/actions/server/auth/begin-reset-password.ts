"use server";

import { TAuthActionResponse, TAuthResetCtx } from "@/types";

import { UPDATE_PASSWORD_ROUTE } from "@/constants";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const server_resetPassword = async (
    resetCtx: TAuthResetCtx,
): Promise<Omit<TAuthActionResponse, "data">> => {
    let email: string = "";
    const response = await withTryCatch(async () => {
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
    }, `We sent a password reset link to ${email}`);

    return response;
};
