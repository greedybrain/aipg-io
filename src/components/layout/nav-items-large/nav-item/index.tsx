"use client";

import Link, { LinkProps } from "next/link";

import { HTMLAttributes } from "react";
import { TNavItem } from "../../nav-items-mobile/data/nav-items";
import { cn } from "@/utils/tailwind/tw-merge";
import { logout } from "@/services/actions/server/auth/logout";

interface Props {
    item: TNavItem;
    linkProps?: LinkProps & HTMLAttributes<HTMLAnchorElement>;
}

const NavItem = ({ item, linkProps }: Props) => {
    return (
        <Link
            href={item.route}
            {...linkProps}
            className={cn(
                "block text-center font-medium",
                linkProps?.className,
            )}
            onClick={item.name === "Logout" ? async () => logout() : () => null}
        >
            {item.name}
        </Link>
    );
};

export default NavItem;
