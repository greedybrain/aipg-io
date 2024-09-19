"use client";

import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/constants";

import Link from "next/link";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAuthFormContext } from "@/contexts/auth-form-context";

const DontOrAlreadyHaveAccountPrompt = () => {
    const { formCriteria } = useAuthFormContext();

    return (
        <p className={cn("font-bold mt-5 text-center")}>
            {formCriteria.dontOrAlreadyHaveAccount}{" "}
            <Link
                href={
                    formCriteria.dontOrAlreadyHaveAccount ===
                    "Don't have an account?"
                        ? SIGNUP_ROUTE
                        : LOGIN_ROUTE
                }
                className={cn("font-medium mt-5 text-blue-500")}
            >
                {formCriteria.dontOrAlreadyHaveAccount ===
                "Don't have an account?"
                    ? "Signup"
                    : "Login"}
            </Link>
        </p>
    );
};

export default DontOrAlreadyHaveAccountPrompt;
