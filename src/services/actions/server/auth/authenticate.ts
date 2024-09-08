"use server";

import {
    SignInWithPasswordCredentials,
    SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";
import { TAuthActionResponse, TAuthFlow } from "@/types";

import { AuthService } from "../models/auth-service";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const authenticate = async (
    authFlow: TAuthFlow,
    credentials: SignUpWithPasswordCredentials | SignInWithPasswordCredentials,
): Promise<TAuthActionResponse> => {
    try {
        const authService = new AuthService();
        return await authService.authenticate(authFlow, credentials);
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: undefined,
        };
    }
};
