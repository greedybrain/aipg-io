import React, { HTMLAttributes } from "react";

import { LucideProps } from "lucide-react";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {
    Icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    iconProps?: LucideProps;
}

const ResetPasswordIcon = ({ Icon, iconProps, ...rest }: Props) => {
    return (
        <div
            {...rest}
            className={cn(
                "border-2 rounded-lg inline-block p-2 border-app-tertiary shadow-neobrut1 bg-app-primary rotate-6",
                rest.className,
            )}
        >
            <Icon {...iconProps} />
        </div>
    );
};

export default ResetPasswordIcon;
