"use client";

import React, { useContext } from "react";
import useLoginOrSignupCriteria, {
    FormCriteria,
} from "@/hooks/use-login-or-signup-criteria";

export type TAuthFormContext = {
    formCriteria: FormCriteria;
};

export const AuthFormContext = React.createContext<
    TAuthFormContext | undefined
>(undefined);

const AuthFormContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { formCriteria } = useLoginOrSignupCriteria();

    return (
        <AuthFormContext.Provider
            value={{
                formCriteria,
            }}
        >
            {children}
        </AuthFormContext.Provider>
    );
};

export const useAuthFormContext = () => {
    const context = useContext(AuthFormContext);

    if (context === undefined) {
        throw new Error("AuthFormContextProvider is missing for this context");
    }

    return context;
};

export default AuthFormContextProvider;
