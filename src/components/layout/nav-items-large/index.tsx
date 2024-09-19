import NavItem from "./nav-item";
import SignupButton from "../../common/signup-button";
import { cn } from "@/utils/tailwind/tw-merge";
import navItems from "../nav-items-mobile/data/nav-items";

interface Props {
    userId: string | undefined;
}

const NavItemsLarge = ({ userId }: Props) => {
    console.log("User Id: ", userId);
    return (
        <nav className={cn("hidden sm:flex flex-col items-center")}>
            <ul className={cn("flex items-center gap-x-5")}>
                {navItems.map((item) => {
                    const shouldNotRender =
                        (!userId && item.name === "Logout") ||
                        (userId && item.name === "Login") ||
                        item.name === "Privacy policy";
                    return (
                        !shouldNotRender && (
                            <li key={item.name} className={cn("mr-10")}>
                                <NavItem item={item} />
                            </li>
                        )
                    );
                })}
                {!userId && (
                    <li className={cn("")}>
                        <SignupButton
                            linkProps={{
                                className: "w-64 text-[16px]",
                            }}
                        />
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavItemsLarge;
