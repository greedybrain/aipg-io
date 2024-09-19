import React, { HTMLAttributes } from "react";

import { cn } from "@/utils/tailwind/tw-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Group = React.forwardRef<HTMLDivElement, Props>(
    ({ children, ...rest }, ref) => {
        return (
            <div ref={ref} {...rest} className={cn(rest.className)}>
                {children}
            </div>
        );
    },
);

Group.displayName = "Group";

export default Group;
