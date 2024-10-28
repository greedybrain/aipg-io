import { ChevronDown } from "lucide-react";
import Group from "@/components/layout/group";
import TagList from "../tag-list";
import { cn } from "@/utils/tailwind/tw-merge";
import { useSortFilterContext } from "@/contexts/sort-filter-context";

const WithTags = () => {
    const { isTagsCollapsed, handleTagCollapse } = useSortFilterContext();

    return (
        <>
            <Group className={cn("flex justify-between items-center px-6")}>
                <Group
                    onClick={handleTagCollapse}
                    className={cn("flex items-center gap-x-1 cursor-pointer")}
                >
                    <p className={cn("font-bold text-lg")}>Tags </p>
                    <ChevronDown
                        size={18}
                        className={cn("hover:scale-105 transition-all", {
                            "rotate-180": isTagsCollapsed,
                        })}
                    />
                </Group>
                <p className={cn("text-sm text-app-tertiary/65")}>
                    0 of 3 selected
                </p>
            </Group>
            <div className={cn("px-6")}>{isTagsCollapsed && <TagList />}</div>
        </>
    );
};

export default WithTags;
