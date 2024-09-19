"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind/tw-merge";
import useAuthStore from "@/stores/auth";

const OpenEmailApp = () => {
    const emailProviderLink = useAuthStore(
        (state) => state.reset.emailProviderLink,
    );

    return (
        <Button
            type="submit"
            size={"lg"}
            className={cn(
                "mt-8 h-[60px] w-full border-2 border-app-tertiary bg-app-primary font-bold text-app-tertiary shadow-neobrut1 transition-all hover:shadow-neobrut2 text-[16px]",
            )}
        >
            <a
                href={emailProviderLink}
                target="_blank"
                rel="noreferrer noopener"
            >
                Open email app
            </a>
        </Button>
    );
};

export default OpenEmailApp;
