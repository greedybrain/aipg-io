"use client";

import React, { useContext, useState } from "react";

export type THomeSearchContext = {
    isFocused: boolean;
    query: string;
    handleFocus: () => void;
    handleBlur: () => void;
    handleChange: (value: React.ChangeEvent<HTMLInputElement> | string) => void;
};

export const HomeSearchContext = React.createContext<
    THomeSearchContext | undefined
>(undefined);

const HomeSearchContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [query, setQuery] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (
        value: React.ChangeEvent<HTMLInputElement> | string,
    ) => {
        const event = value as React.ChangeEvent<HTMLInputElement>;
        if (event.currentTarget) {
            setQuery(event.currentTarget.value);
        } else {
            setQuery(value as string);
        }
    };

    return (
        <HomeSearchContext.Provider
            value={{
                isFocused,
                query,
                handleFocus,
                handleBlur,
                handleChange,
            }}
        >
            {children}
        </HomeSearchContext.Provider>
    );
};

export const useHomeSearchContext = () => {
    const context = useContext(HomeSearchContext);

    if (context === undefined) {
        throw new Error(
            "HomeSearchContextProvider is missing for this context",
        );
    }

    return context;
};

export default HomeSearchContextProvider;
