"use client";

import { Button } from "@/components/ui/button";
import { LOGIN_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { logout } from "@/services/actions/server/auth/logout";
import { notify } from "@/utils/alerts/toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface Props {
    btnSize?: "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
}

const LogoutButton = ({ btnSize, className }: Props) => {
    const { push } = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            const { success, message } = await logout();

            if (success) {
                notify({ type: "success", message, id: "logout-success" });
                push(LOGIN_ROUTE);
            }
        });
    };

    return (
        <Button
            size={btnSize ?? "default"}
            variant={"tertiary"}
            className={cn("px-4 py-2 w-28", className)}
            onClick={handleClick}
        >
            {isPending ? "Logging out..." : "Log out"}
        </Button>
    );
};

export default LogoutButton;
