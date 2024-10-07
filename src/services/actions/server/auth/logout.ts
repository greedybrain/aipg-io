"use server";

import { TAuthActionResponse } from "@/types";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { withTryCatch } from "@/utils/error-handling/withTryCatch";

export const logout = async (): Promise<Omit<TAuthActionResponse, "data">> => {
    const response = await withTryCatch(async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            if (error.code) {
                throw new Error(authErrorMessages[error.code]);
            } else {
                throw new Error(error.message);
            }
        }
    }, "Logout successful");

    return response;
};
