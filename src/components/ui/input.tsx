import * as React from "react";

import { cn } from "@/utils/tailwind/tw-merge";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, isError, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    {
                        "flex h-[60px] w-full rounded-lg border-2 border-app-tertiary bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-neobrut3 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-neobrut2 transition-all bg-white text-[16px]":
                            type !== "file",
                        "border-red-500 shadow-neobrut2-error focus-visible:shadow-neobrut3-error":
                            isError && type !== "file",
                    },
                    className,
                )}
                ref={ref}
                {...props}
            >
                {props.children}
            </input>
        );
    },
);
Input.displayName = "Input";

export { Input };
