import * as React from "react";

import { cn } from "@/utils/tailwind/tw-merge";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    isError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, isError, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[125px] w-full rounded-lg border-2 border-app-tertiary bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-neobrut3 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-neobrut2 transition-all bg-white text-[16px]",
                    {
                        "border-red-500 shadow-neobrut2-error focus-visible:shadow-neobrut3-error":
                            isError,
                    },
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Textarea.displayName = "Textarea";

export { Textarea };
