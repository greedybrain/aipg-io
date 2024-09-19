import { HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const Copyright = ({ ...rest }: Props) => {
    return (
        <p {...rest} className={cn("font-semibold py-5", rest.className)}>
            Copyright &copy; 2023 AiPlayground
        </p>
    );
};

export default Copyright;
