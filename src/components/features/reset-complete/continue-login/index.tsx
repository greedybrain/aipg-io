"use client";

import { Button } from "@/components/ui/button";
import { HOME_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { useRouter } from "next/navigation";

const ContinueLogin = () => {
    const { replace } = useRouter();
    return (
        <Button
            type="submit"
            size={"lg"}
            className={cn(
                "mt-8 h-[60px] w-full border-2 border-app-tertiary bg-app-primary font-bold text-app-tertiary shadow-neobrut1 transition-all hover:shadow-neobrut2 text-[16px]",
            )}
            onClick={() => replace(HOME_ROUTE)}
            // onClick={async () => {
            //     const { success, message } = await client_login({
            //         email,
            //         password: newPassword,
            //     });

            //     if (success) {
            //         notify({ type: "success", message, id: "login-success" });
            //     } else {
            //         notify({ type: "error", message, id: "login-fail" });
            //     }
            // }}
        >
            Continue
        </Button>
    );
};

export default ContinueLogin;
