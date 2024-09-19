import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export type FormCriteria = {
    formHeading: "Welcome Back" | "Create Account";
    formGuideMessage:
        | "Choose one of the methods below to login."
        | "Create an account to start receiving AI updates and more!";
    isSignupAction: boolean;
    dontOrAlreadyHaveAccount:
        | "Don't have an account?"
        | "Already have an account?";
};

const useLoginOrSignupCriteria = () => {
    const [formCriteria, setFormCriteria] = useState<FormCriteria>({
        formHeading: "Welcome Back",
        formGuideMessage: "Choose one of the methods below to login.",
        isSignupAction: false,
        dontOrAlreadyHaveAccount: "Don't have an account?",
    });
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/auth/signup") {
            setFormCriteria(() => ({
                formHeading: "Create Account",
                formGuideMessage:
                    "Create an account to start receiving AI updates and more!",
                isSignupAction: true,
                dontOrAlreadyHaveAccount: "Already have an account?",
            }));
        }
    }, [pathname]);

    return {
        formCriteria,
    };
};

export default useLoginOrSignupCriteria;
