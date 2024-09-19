"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import { useHomeSearchContext } from "@/contexts/home-search-context";

const SearchInput = () => {
    const { query, handleFocus, handleBlur, handleChange } =
        useHomeSearchContext();

    return (
        <input
            type="text"
            autoFocus
            value={query}
            placeholder="Search AiPlayground"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn("caret-app-primary flex-grow pr-1")}
        />
    );
};

export default SearchInput;
