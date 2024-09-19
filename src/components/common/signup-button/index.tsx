import Link, { LinkProps } from "next/link";

import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import { SIGNUP_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props {
    linkProps?: Omit<LinkProps, "href"> & HTMLAttributes<HTMLAnchorElement>;
    btnSize?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const SignupButton = ({ btnSize, linkProps }: Props) => {
    return (
        <Button
            size={btnSize ?? "default"}
            variant={"tertiary"}
            className={cn("p-0")}
        >
            <Link
                href={SIGNUP_ROUTE}
                className={cn("px-4 py-2 w-28", linkProps?.className)}
                {...linkProps}
            >
                Sign Up
            </Link>
        </Button>
    );
};

export default SignupButton;
