"use client";

import SearchExample from "./search-example";
import { cn } from "@/utils/tailwind/tw-merge";
import searchExamples from "./data/search-examples";
import { useHomeSearchContext } from "@/contexts/home-search-context";

const SearchExamples = () => {
    const { handleChange } = useHomeSearchContext();

    return (
        <ul className={cn("w-full flex flex-wrap mt-5 gap-2 px-2")}>
            {searchExamples.map((ex) => (
                <li
                    key={ex}
                    className={cn(
                        "border-2 bg-app-tertiary text-white px-4 py-2 rounded-lg border-app-tertiary text-sm cursor-pointer",
                    )}
                    onClick={() => handleChange(ex)}
                >
                    <SearchExample example={ex} />
                </li>
            ))}
        </ul>
    );
};

export default SearchExamples;
