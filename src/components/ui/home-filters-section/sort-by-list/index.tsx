import SortByItem from "./sort-by-item";
import { cn } from "@/utils/tailwind/tw-merge";
import { sortByList } from "@/utils/data/sort-by";

const SortByList = () => {
    return (
        <ul className={cn("flex flex-wrap gap-2 mt-2")}>
            {sortByList.map((sortItem) => (
                <li
                    key={sortItem}
                    className={cn(
                        "text-sm text-app-tertiary/75 border-2 rounded-full border-app-tertiary/65 px-3 py-2 cursor-pointer hover:scale-105 transition-all",
                    )}
                >
                    <SortByItem sortItem={sortItem} />
                </li>
            ))}
        </ul>
    );
};

export default SortByList;
