"use server";

import { TAuthActionResponse, TAuthResetCtx } from "@/types";

import { AuthService } from "@/models/supabase/auth-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const finishResetPassword = async (
    resetCtx: TAuthResetCtx,
): Promise<TAuthActionResponse> => {
    try {
        const authService = new AuthService();
        return await authService.resetPassword(resetCtx);
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: undefined,
        };
    }
};
