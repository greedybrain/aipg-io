import React, { HTMLAttributes } from "react";

import { cn } from "@/utils/tailwind/tw-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FixedContainer = React.forwardRef<HTMLDivElement, Props>(
    ({ children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                {...rest}
                className={cn("mx-auto max-w-7xl px-5", rest.className)}
            >
                {children}
            </div>
        );
    },
);

FixedContainer.displayName = "FixedContainer";

export default FixedContainer;
