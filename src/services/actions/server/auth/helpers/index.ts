import {
    AuthOtpResponse,
    AuthResponse,
    AuthTokenResponsePassword,
    SignInWithPasswordCredentials,
    SignInWithPasswordlessCredentials,
    SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";

import { TAuthFlow } from "@/types";
import { createClient } from "@/utils/supabase/server";

export const handleAuthFlow = async <T extends TAuthFlow>(
    authFlow: T,
    credentials: T extends "signUp"
        ? SignUpWithPasswordCredentials
        : T extends "signInWithPassword"
        ? SignInWithPasswordCredentials
        : SignInWithPasswordlessCredentials,
): Promise<AuthResponse | AuthTokenResponsePassword | AuthOtpResponse> => {
    const supabase = createClient();

    switch (authFlow) {
        case "signUp":
            return supabase.auth.signUp(
                credentials as SignUpWithPasswordCredentials,
            );
        case "signInWithPassword":
            return supabase.auth.signInWithPassword(
                credentials as SignInWithPasswordCredentials,
            );
        case "signInWithOtp":
            return supabase.auth.signInWithOtp(
                credentials as SignInWithPasswordlessCredentials,
            );
        default:
            throw new Error("Unsupported authentication flow");
    }
};
