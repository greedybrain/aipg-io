import {
    AuthOtpResponse,
    AuthResponse,
    AuthTokenResponsePassword,
    Provider,
    SignInWithOAuthCredentials,
    SignInWithPasswordCredentials,
    SignInWithPasswordlessCredentials,
    SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";
import { TAuthActionResponse, TAuthFlow, TAuthResetCtx } from "../../types";

import { authErrorMessages } from "../../utils/status-messages/error-codes-and-messages/auth-error-messages";
import { createClient } from "../../utils/supabase/server";
import { getErrorMessage } from "../../utils/status-messages/get-error-message";
import { headers } from "next/headers";

export class AuthService {
    private supabase;

    constructor() {
        this.supabase = createClient(); // Initialize the Supabase client once in the constructor
    }

    private async handleAuthFlow<T extends TAuthFlow>(
        authFlow: T,
        credentials: T extends "signUp"
            ? SignUpWithPasswordCredentials
            : T extends "signInWithPassword"
            ? SignInWithPasswordCredentials
            : SignInWithPasswordlessCredentials,
    ): Promise<AuthResponse | AuthTokenResponsePassword | AuthOtpResponse> {
        switch (authFlow) {
            case "signUp":
                return this.supabase.auth.signUp(
                    credentials as SignUpWithPasswordCredentials,
                );
            case "signInWithPassword":
                return this.supabase.auth.signInWithPassword(
                    credentials as SignInWithPasswordCredentials,
                );
            case "signInWithOtp":
                return this.supabase.auth.signInWithOtp(
                    credentials as SignInWithPasswordlessCredentials,
                );
            default:
                throw new Error("Unsupported authentication flow");
        }
    }

    async authenticate<T extends TAuthFlow>(
        authFlow: T,
        credentials: T extends "signUp"
            ? SignUpWithPasswordCredentials
            : T extends "signInWithPassword"
            ? SignInWithPasswordCredentials
            : SignInWithPasswordlessCredentials,
    ): Promise<TAuthActionResponse> {
        try {
            const {
                data: { user },
                error,
            } = await this.handleAuthFlow(authFlow, credentials);

            if (error) {
                if (error.code) {
                    throw new Error(authErrorMessages[error.code]);
                } else {
                    throw new Error(error.message);
                }
            }

            if (!user)
                throw new Error("Authentication failed. Try again later.");

            return {
                success: true,
                message: "Authentication successful",
                user,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                user: undefined,
            };
        }
    }

    async getUser(): Promise<TAuthActionResponse> {
        try {
            const {
                data: { user },
                error,
            } = await this.supabase.auth.getUser();

            if (error) {
                if (error.code) {
                    throw new Error(authErrorMessages[error.code]);
                } else {
                    throw new Error(error.message);
                }
            }

            if (!user)
                throw new Error("Failed to find that user. Try again later.");

            return {
                success: true,
                message: "User found successfully",
                user,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                user: undefined,
            };
        }
    }

    async logout(): Promise<TAuthActionResponse> {
        try {
            const { error } = await this.supabase.auth.signOut();

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
                user: undefined,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                user: undefined,
            };
        }
    }

    async resetPassword(resetCtx: TAuthResetCtx): Promise<TAuthActionResponse> {
        try {
            const { email, options } = resetCtx;
            const { data, error } =
                await this.supabase.auth.resetPasswordForEmail(email, options);

            if (!data) {
                if (error) {
                    if (error.code) {
                        throw new Error(authErrorMessages[error.code]);
                    } else {
                        throw new Error(error.message);
                    }
                }
            }

            return {
                success: true,
                message: "Password reset link sent to email provided",
                user: undefined,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                user: undefined,
            };
        }
    }

    async updatePassword(newPassword: string) {
        try {
            const {
                data: { user },
                error,
            } = await this.supabase.auth.updateUser({
                password: newPassword,
            });

            if (error) {
                if (error.code) {
                    throw new Error(authErrorMessages[error.code]);
                } else {
                    throw new Error(error.message);
                }
            }

            if (!user)
                throw new Error("Failed to find that user. Try again later.");

            return {
                success: false,
                message: "Password update successful",
                user,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                user: undefined,
            };
        }
    }

    async oauth(provider: Provider) {
        try {
            const origin = headers().get("origin");

            const {
                data: { url },
                error,
            } = await this.supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${origin}/auth/callback`,
                },
            });

            if (error) {
                if (error.code) {
                    throw new Error(authErrorMessages[error.code]);
                } else {
                    throw new Error(error.message);
                }
            }

            const capitalizedProvider =
                provider.charAt(0).toLocaleUpperCase() + provider.slice(1);

            if (!url)
                throw new Error(
                    `Failed to sign in with ${capitalizedProvider}`,
                );

            return {
                success: true,
                message: "",
                url,
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                url: undefined,
            };
        }
    }
}
