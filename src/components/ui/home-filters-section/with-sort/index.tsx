import { ChevronDown } from "lucide-react";
import Group from "@/components/layout/group";
import SortByList from "../sort-by-list";
import { cn } from "@/utils/tailwind/tw-merge";
import { useSortFilterContext } from "@/contexts/sort-filter-context";

const WithSort = () => {
    const { isSortByCollapsed, handleSortByCollapse } = useSortFilterContext();

    return (
        <>
            <Group className={cn("flex justify-between items-center px-6")}>
                <Group
                    onClick={handleSortByCollapse}
                    className={cn("flex items-center gap-x-1 cursor-pointer")}
                >
                    <p className={cn("font-bold text-lg")}>Sort by </p>
                    <ChevronDown
                        size={18}
                        className={cn("hover:scale-105 transition-all", {
                            "rotate-180": isSortByCollapsed,
                        })}
                    />
                </Group>
            </Group>
            <div className={cn("px-6")}>
                {isSortByCollapsed && <SortByList />}
            </div>
        </>
    );
};

export default WithSort;
