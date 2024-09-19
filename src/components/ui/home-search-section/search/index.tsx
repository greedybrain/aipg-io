"use client";

import SearchIcon from "./search-icon";
import SearchInput from "./search-input";
import SearchSubmit from "./search-submit";
import { cn } from "@/utils/tailwind/tw-merge";
import { useHomeSearchContext } from "@/contexts/home-search-context";

const Search = () => {
    const { isFocused } = useHomeSearchContext();
    return (
        <div
            className={cn(
                "bg-white border-2 border-app-tertiary rounded-lg flex h-[60px] items-center px-1 shadow-neobrut2 transition-all",
                {
                    "shadow-neobrut3": isFocused,
                },
            )}
        >
            <SearchIcon />
            <SearchInput />
            <SearchSubmit />
        </div>
    );
};

export default Search;
