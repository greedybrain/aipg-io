import { Content } from "../../data/policy-content";
import Link from "next/link";
import { cn } from "@/utils/tailwind/tw-merge";

const TableOfContentsItem = ({
    content,
    goTo,
    index,
}: Content & { index: number }) => {
    return (
        <li className={cn("flex gap-x-2")}>
            <div>{index + 1}.</div>
            <Link href={goTo} className={cn("text-blue-500")}>
                {content}
            </Link>
        </li>
    );
};

export default TableOfContentsItem;
