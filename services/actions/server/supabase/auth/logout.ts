"use server";

import { AuthService } from "../../../../../models/supabase/auth-service";
import { TAuthActionResponse } from "../../../../../types";
import { getErrorMessage } from "../../../../../utils/status-messages/get-error-message";

export const logout = async (): Promise<TAuthActionResponse> => {
    try {
        const authService = new AuthService();
        return await authService.logout();
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: undefined,
        };
    }
};
