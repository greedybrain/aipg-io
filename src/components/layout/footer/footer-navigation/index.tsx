import Link from "next/link";
import { cn } from "@/utils/tailwind/tw-merge";
import navItems from "../../nav-items-mobile/data/nav-items";

const FooterNavigation = () => {
    return (
        <nav>
            <ul
                className={cn(
                    "flex flex-col gap-y-5 items-center lg:flex-row lg:gap-x-10 py-10",
                )}
            >
                {navItems.map((item) => {
                    if (item.name === "Login") return null;

                    return (
                        <li key={item.name}>
                            <Link
                                href={item.route}
                                className={cn(
                                    "font-semibold hover:text-app-tertiary/75 inline-block",
                                )}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterNavigation;
