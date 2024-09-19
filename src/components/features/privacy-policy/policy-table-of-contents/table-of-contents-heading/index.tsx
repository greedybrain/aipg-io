import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../../data/policy-content";

const TableOfContentsHeading = () => {
    return (
        <h2 className={cn("font-bold md:text-2xl text-xl")}>
            {policy.section2.title}
        </h2>
    );
};

export default TableOfContentsHeading;
