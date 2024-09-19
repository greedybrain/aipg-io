"use client";

import Link from "next/link";
import { PASSWORD_RESET_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAuthFormContext } from "@/contexts/auth-form-context";

const ForgotPassword = () => {
    const { formCriteria } = useAuthFormContext();

    if (formCriteria.isSignupAction) return null;

    return (
        <Link
            href={PASSWORD_RESET_ROUTE}
            className={cn("self-end text-app-tertiary/75")}
        >
            Forgot password?
        </Link>
    );
};

export default ForgotPassword;
