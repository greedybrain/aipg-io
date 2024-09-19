import { DialogCloseProps } from "@radix-ui/react-dialog";
import LogoutButton from "@/components/common/logout-button";
import NavItem from "./nav-item";
import React from "react";
import SignupButton from "../../common/signup-button";
import { cn } from "@/utils/tailwind/tw-merge";
import navItems from "./data/nav-items";

interface Props {
    userId: string | undefined;
    DrawerClose: React.ForwardRefExoticComponent<
        DialogCloseProps & React.RefAttributes<HTMLButtonElement>
    >;
}

const NavItemsMobile = ({ userId, DrawerClose }: Props) => {
    return (
        <nav className={cn("flex flex-col items-center pt-12")}>
            <ul className={cn("space-y-5")}>
                {navItems.map((item) =>
                    userId && item.name === "Login" ? null : (
                        <li key={item.name}>
                            <DrawerClose asChild>
                                <NavItem item={item} />
                            </DrawerClose>
                        </li>
                    ),
                )}
                <li>
                    {userId ? (
                        <DrawerClose asChild>
                            <LogoutButton className={cn("w-64 text-[16px]")} />
                        </DrawerClose>
                    ) : (
                        <DrawerClose asChild>
                            <SignupButton
                                linkProps={{
                                    className: "w-64 text-[16px]",
                                }}
                            />
                        </DrawerClose>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavItemsMobile;
