import { HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const BrandName = ({ ...rest }: Props) => {
    return (
        <p {...rest} className={cn("font-extrabold text-2xl", rest.className)}>
            AiPlayground
        </p>
    );
};

export default BrandName;
