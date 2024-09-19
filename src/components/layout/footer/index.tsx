import BrandName from "./brand-name";
import Copyright from "./copyright";
import FixedContainer from "../fixed-container";
import FooterNavigation from "./footer-navigation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/tailwind/tw-merge";

const Footer = () => {
    return (
        <footer className={cn("flex flex-col items-center mt-[100px]")}>
            <FixedContainer
                className={cn(
                    "flex flex-col items-center lg:flex-row lg:justify-between w-full",
                )}
            >
                <BrandName />
                <FooterNavigation />
            </FixedContainer>
            <Separator className={cn("bg-app-tertiary")} />
            <Copyright />
        </footer>
    );
};

export default Footer;
