"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import useAuthStore from "@/stores/auth";

const ReassuranceMessage = () => {
    const email = useAuthStore((state) => state.reset.email);

    return (
        <p className={cn("text-center mt-3 text-sm text-app-tertiary/75")}>
            We sent a password reset link to{" "}
            <span className={cn("font-semibold text-app-tertiary/75")}>
                {email}
            </span>
        </p>
    );
};

export default ReassuranceMessage;
