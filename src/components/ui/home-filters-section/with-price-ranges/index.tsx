import { ChevronUp } from "lucide-react";
import Group from "@/components/layout/group";
import PriceRangesList from "../price-ranges-list";
import { cn } from "@/utils/tailwind/tw-merge";
import { useSortFilterContext } from "@/contexts/sort-filter-context";

const WithPriceRanges = () => {
    const { isPriceRangesCollapsed, handlePriceRangeCollapse } =
        useSortFilterContext();

    return (
        <>
            <Group className={cn("flex justify-between items-center px-6")}>
                <Group
                    onClick={handlePriceRangeCollapse}
                    className={cn("flex items-center gap-x-1 cursor-pointer")}
                >
                    <p className={cn("font-bold text-lg")}>Price range </p>
                    <ChevronUp
                        size={18}
                        className={cn("hover:scale-105 transition-all", {
                            "rotate-180": isPriceRangesCollapsed,
                        })}
                    />
                </Group>
            </Group>
            <div className={cn("px-6")}>
                {isPriceRangesCollapsed && <PriceRangesList />}
            </div>
        </>
    );
};

export default WithPriceRanges;
