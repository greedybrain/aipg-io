import {
    TLoginCredentials,
    TSignupCredentials,
} from "@/components/features/auth-form";
import {
    authenticate,
    getUser,
} from "@/services/actions/server/auth/authenticate";

import { TAuthActionResponse } from "@/types";
import { TSelectAppUser } from "@/db/drizzle/schemas/app-users";
import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { getEmailProviderLink } from "@/utils/email/getEmailProviderLink";
import { logout } from "@/services/actions/server/auth/logout";
import { server_resetPassword } from "@/services/actions/server/auth/begin-reset-password";
import { server_updatePassword } from "@/services/actions/server/auth/finish-reset-password";

interface InitialState {
    authCTX:
        | {
              appUser: TSelectAppUser;
              authUser: User;
          }
        | {
              appUser: undefined;
              authUser: undefined;
          };
    reset: {
        email: string;
        newPassword: string;
        emailProviderLink: string;
        status:
            | "RESET BEGIN"
            | "EMAIL SENT"
            | "CREATING NEW PASSWORD"
            | "RESET COMPLETE";
    };
    client_login: ({
        email,
        password,
    }: TLoginCredentials) => Promise<TAuthActionResponse>;
    client_signup: ({
        email,
        password,
        fullName,
    }: Omit<
        TSignupCredentials,
        "confirmPassword"
    >) => Promise<TAuthActionResponse>;
    client_loadUser: () => Promise<void>;
    client_logoutUser: () => Promise<void>;
    client_resetPassword: (email: string) => Promise<void>;
    client_updatePassword: (
        newPassword: string,
        code: string | null,
    ) => Promise<void>;
}

const useAuthStore = create<InitialState>((set) => ({
    authCTX: { appUser: undefined, authUser: undefined },
    reset: {
        email: "",
        newPassword: "",
        emailProviderLink: "",
        status: "RESET COMPLETE",
    },
    client_login: async ({ email, password }) => {
        const { success, message, user } = await authenticate(
            "signInWithPassword",
            {
                email,
                password,
            },
        );

        set(() => ({ authCTX: user }));

        return {
            success,
            message,
            user,
        };
    },
    client_signup: async ({ email, password, fullName }) => {
        const { success, message, user } = await authenticate(
            "signUp",
            {
                email,
                password,
            },
            {
                fullName,
            },
        );

        set(() => ({ authCTX: user }));

        return {
            success,
            message,
            user,
        };
    },
    client_loadUser: async () => {
        const { user } = await getUser();
        user.authUser && set(() => ({ authCTX: user }));
    },
    client_logoutUser: async () => {
        const { success } = await logout();
        success &&
            set(() => ({
                authCTX: { appUser: undefined, authUser: undefined },
            }));
    },
    client_resetPassword: async (email) => {
        localStorage.setItem("emai;", email);
        set((state) => ({
            ...state,
            reset: {
                email,
                newPassword: "",
                emailProviderLink: getEmailProviderLink(email),
                status: "RESET BEGIN",
            },
        }));
        const { success } = await server_resetPassword({
            email,
        });

        if (success) {
            set((state) => ({
                ...state,
                reset: {
                    ...state.reset,
                    status: "EMAIL SENT",
                },
            }));
        }
    },
    client_updatePassword: async (newPassword, code) => {
        set((state) => ({
            ...state,
            reset: {
                ...state.reset,
                newPassword,
                status: "CREATING NEW PASSWORD",
            },
        }));
        const { success, user } = await server_updatePassword(
            newPassword,
            code,
        );

        if (success && user && user.email) {
            set((state) => ({
                ...state,
                reset: {
                    ...state.reset,
                    email: user.email ?? "",
                    status: "RESET COMPLETE",
                },
            }));
        }
    },
}));

export default useAuthStore;
