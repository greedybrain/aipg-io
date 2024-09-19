"use client";

import React, { useContext, useState } from "react";

export type TSortFilterContext = {
    isTagsCollapsed: boolean;
    isPriceRangesCollapsed: boolean;
    isSortByCollapsed: boolean;
    handleTagCollapse: () => void;
    handlePriceRangeCollapse: () => void;
    handleSortByCollapse: () => void;
};

export const SortFilterContext = React.createContext<
    TSortFilterContext | undefined
>(undefined);

const SortFilterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isTagsCollapsed, setIsTagsCollapsed] = useState<boolean>(false);
    const [isPriceRangesCollapsed, setIsPriceRangesCollapsed] =
        useState<boolean>(false);
    const [isSortByCollapsed, setIsSortByCollapsed] = useState<boolean>(false);

    const handleTagCollapse = () => {
        setIsTagsCollapsed((prev) => !prev);
    };

    const handlePriceRangeCollapse = () => {
        setIsPriceRangesCollapsed((prev) => !prev);
    };

    const handleSortByCollapse = () => {
        setIsSortByCollapsed((prev) => !prev);
    };

    return (
        <SortFilterContext.Provider
            value={{
                isPriceRangesCollapsed,
                isSortByCollapsed,
                isTagsCollapsed,
                handleTagCollapse,
                handlePriceRangeCollapse,
                handleSortByCollapse,
            }}
        >
            {children}
        </SortFilterContext.Provider>
    );
};

export const useSortFilterContext = () => {
    const context = useContext(SortFilterContext);

    if (context === undefined) {
        throw new Error(
            "SortFilterContextProvider is missing for this context",
        );
    }

    return context;
};

export default SortFilterContextProvider;
