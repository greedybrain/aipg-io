"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Group from "@/components/layout/group";
import WithPriceRanges from "@/components/ui/home-filters-section/with-price-ranges";
import WithSort from "@/components/ui/home-filters-section/with-sort";
import WithTags from "@/components/ui/home-filters-section/with-tags";
import { cn } from "@/utils/tailwind/tw-merge";

const FiltersMenuTrigger = () => {
    // const [isPriceRangesCollapsed, setIsPriceRangesCollapsed] =
    //     useState<boolean>(false);
    // const [isSortByCollapsed, setIsSortByCollapsed] = useState<boolean>(false);

    return (
        <Sheet>
            <SheetTrigger
                className={cn(
                    "flex items-center px-4 h-14 mt-14 border-2 border-app-tertiary bg-white rounded-lg shadow-neobrut2 gap-x-3 ml-auto hover:shadow-neobrut3 transition-all",
                )}
            >
                <Filter size={18} />
                <p className={cn("font-semibold")}>Sort & Filter</p>
            </SheetTrigger>
            <SheetContent
                className={cn(
                    "w-full max-w-[400px] overflow-y-scroll h-full flex flex-col justify-between",
                )}
            >
                <Group>
                    <SheetHeader className={cn("px-6")}>
                        <SheetTitle>Sort & Filter</SheetTitle>
                    </SheetHeader>
                    <Group className={cn("mt-10")}>
                        <WithTags />
                    </Group>
                    <Group className={cn("mt-5")}>
                        <WithPriceRanges />
                    </Group>
                    <Group className={cn("mt-5")}>
                        <WithSort />
                    </Group>
                </Group>
                <SheetFooter
                    className={cn(
                        "w-full flex items-center flex-row gap-x-4 border-t py-3 px-6",
                    )}
                >
                    <SheetClose
                        className={cn(
                            "border-2 border-app-tertiary rounded-lg w-1/2 shadow-neobrut2 h-12 font-bold hover:shadow-neobrut3 transition-all",
                        )}
                    >
                        Cancel
                    </SheetClose>
                    <Button
                        size={"lg"}
                        className={cn("w-1/2 text-[16px] h-12")}
                    >
                        Apply
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default FiltersMenuTrigger;
