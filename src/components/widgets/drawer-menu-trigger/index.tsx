import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

import BrandLogo from "@/components/common/brand-logo";
import NavItemsMobile from "@/components/layout/nav-items-mobile";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props {
    userId: string | undefined;
}

const DrawerMenuTrigger = ({ userId }: Props) => {
    return (
        <Drawer direction="right" shouldScaleBackground={false}>
            <DrawerTrigger asChild>
                <Menu
                    size={34}
                    className={cn("fill-app-tertiary", "cursor-pointer")}
                />
            </DrawerTrigger>
            <DrawerContent className={cn("h-full")}>
                <DrawerHeader
                    className={cn("flex items-center justify-between")}
                >
                    <DrawerTitle className={cn("hidden")} />
                    <DrawerClose asChild>
                        <BrandLogo
                            imageProps={{
                                width: 60,
                                height: 60,
                            }}
                        />
                    </DrawerClose>
                    <DrawerClose asChild>
                        <X
                            size={24}
                            className={cn("fill-app-tertiary cursor-pointer")}
                        />
                    </DrawerClose>
                </DrawerHeader>
                <NavItemsMobile userId={userId} DrawerClose={DrawerClose} />
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerMenuTrigger;
