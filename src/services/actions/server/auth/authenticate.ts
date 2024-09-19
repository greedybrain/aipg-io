"use server";

import {
    SignInWithPasswordCredentials,
    SignInWithPasswordlessCredentials,
    SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";
import { TAuthActionResponse, TAuthFlow } from "@/types";

import { AppUser } from "@/db/drizzle/schemas";
import { authErrorMessages } from "@/utils/data/error-codes-and-messages/auth-error-messages";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/singletons/drizzle";
import { eq } from "drizzle-orm";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";
import { handleAuthFlow } from "./helpers";

type TOtherCredentials = {
    fullName: string;
    confirmPassword?: string;
};

export const authenticate = async <T extends TAuthFlow>(
    authFlow: T,
    credentials: T extends "signUp"
        ? SignUpWithPasswordCredentials
        : T extends "signInWithPassword"
        ? SignInWithPasswordCredentials
        : SignInWithPasswordlessCredentials,
    otherCredentials?: TOtherCredentials,
): Promise<TAuthActionResponse> => {
    try {
        const {
            data: { user },
            error,
        } = await handleAuthFlow(authFlow, credentials);

        if (error) {
            if (error.code) {
                throw new Error(authErrorMessages[error.code]);
            } else {
                throw new Error(error.message);
            }
        }

        if (!user || !user.email)
            throw new Error("Authentication failed. Try again later.");

        if (authFlow === "signUp" && otherCredentials) {
            const [appUser] = await db
                .insert(AppUser)
                .values({
                    email: user.email,
                    name: otherCredentials.fullName,
                    userId: user.id,
                })
                .returning();

            return {
                success: true,
                message: "Authentication successful",
                user: { authUser: user, appUser },
            };
        }

        const appUser = await db.query.AppUser.findFirst({
            where: eq(AppUser.userId, user.id),
        });

        if (!appUser) throw new Error("User was never created");

        return {
            success: true,
            message: "Authentication successful",
            user: { authUser: user, appUser },
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: { authUser: undefined, appUser: undefined },
        };
    }
};

export const getUser = async (): Promise<TAuthActionResponse> => {
    try {
        const supabase = createClient();

        const {
            data: { user },
            error,
        } = await supabase.auth.getUser();

        if (error) {
            if (error.code) {
                throw new Error(authErrorMessages[error.code]);
            } else {
                throw new Error(error.message);
            }
        }

        if (!user) throw new Error("Failed to find user. Try again later.");

        const { data: appUser } = await supabase
            .from("appUsers")
            .select()
            .eq("userId", user.id)
            .single();

        if (!appUser) throw new Error("User was never created");

        return {
            success: true,
            message: "User found successfully",
            user: { authUser: user, appUser },
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            user: { authUser: undefined, appUser: undefined },
        };
    }
};
