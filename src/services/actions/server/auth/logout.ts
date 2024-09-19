"use server";

import { TAuthActionResponse } from "@/types";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const logout = async (): Promise<TAuthActionResponse> => {
    try {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            if (error.code) {
                throw new Error(authErrorMessages[error.code]);
            } else {
                throw new Error(error.message);
            }
        }

        return {
            success: true,
            message: "Logout successful",
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
