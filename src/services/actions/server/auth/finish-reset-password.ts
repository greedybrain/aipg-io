"use server";

import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const server_updatePassword = async (
    newPassword: string,
    code: string | null,
) => {
    try {
        const supabase = createClient();

        if (!code) throw new Error("No current session exists");

        const { error: codeError } = await supabase.auth.exchangeCodeForSession(
            code,
        );

        if (codeError) {
            const errorMessage = codeError.code
                ? authErrorMessages[codeError.code] || codeError.message
                : codeError.message;

            throw new Error(errorMessage);
        }

        const {
            data: { user },
            error: updateError,
        } = await supabase.auth.updateUser({
            password: newPassword,
        });

        if (updateError && !user) {
            const errorMessage = updateError.code
                ? authErrorMessages[updateError.code] || updateError.message
                : updateError.message;

            throw new Error(errorMessage);
        }

        if (!user)
            throw new Error("Failed to find that user. Try again later.");

        return {
            success: false,
            message: "Password updated successfully",
            user,
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: undefined,
        };
    }
};
