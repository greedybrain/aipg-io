import { Check, ChevronsUpDown } from "lucide-react";

import Group from "@/components/layout/group";
import { cn } from "@/utils/tailwind/tw-merge";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import useTags from "@/hooks/use-tags";

const TagsField = () => {
    const ulRef = useRef<HTMLUListElement>(null);
    const {
        tagsRecord,
        selectedTags,
        showList,
        handleHideList,
        handleShowList,
        handleAddOrRemoveTag,
        checkIfTagAdded,
    } = useTags();

    useOnClickOutside(ulRef, handleHideList, "mouseup");

    return (
        <Group className={cn("space-y-2 relative")}>
            <Group className={cn("space-y-2")}>
                <p className={cn("font-bold text-lg")}>Tags</p>
                <Group
                    role="button"
                    className={cn(
                        "flex border-2 border-app-tertiary justify-between rounded-lg items-center space-x-2 h-[60px] px-3 shadow-neobrut2 hover:shadow-neobrut3 transition-all bg-white active:shadow-neobrut2 w-fit min-w-[200px]",
                    )}
                    onClick={handleShowList}
                >
                    <span className={cn("font-medium")}>
                        {!Object.values(selectedTags).length
                            ? "Select tags..."
                            : `${Object.values(selectedTags).length} selected`}
                    </span>
                    <ChevronsUpDown />
                </Group>
            </Group>
            {showList && (
                <ul
                    className={cn(
                        "absolute top-22 border-2 border-app-tertiary rounded-lg shadow-neobrut2 px-2 py-4 max-h-[300px] overflow-y-scroll bg-white w-[300px]",
                    )}
                    ref={ulRef}
                >
                    {Object.values(tagsRecord).map((tag) => {
                        return (
                            <li
                                key={tag.id}
                                className={cn(
                                    "cursor-pointer px-2 py-3 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-between",
                                )}
                                onClick={() => void handleAddOrRemoveTag(tag)}
                            >
                                <p>{tag.name}</p>
                                {checkIfTagAdded(tag.id) && <Check size={20} />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </Group>
    );
};

export default TagsField;
