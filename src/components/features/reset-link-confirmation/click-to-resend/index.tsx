"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import { notify } from "@/utils/alerts/toast";
import useAuthStore from "@/stores/auth";

const ClickToResend = () => {
    const { email, client_resetPassword } = useAuthStore((state) => ({
        email: state.reset.email,
        client_resetPassword: state.client_resetPassword,
    }));

    return (
        <p className={cn("mt-8 text-sm")}>
            {"Didn't receive the email? "}
            <span
                className={cn("text-blue-500 cursor-pointer font-medium")}
                onClick={async () => {
                    await client_resetPassword(email);
                    notify({
                        type: "success",
                        message: "Resent the email",
                        id: "resend-success",
                    });
                }}
            >
                Click to resend
            </span>
        </p>
    );
};

export default ClickToResend;
