import TableOfContentsHeading from "./table-of-contents-heading";
import TableOfContentsItem from "./table-of-contents-item";
import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../data/policy-content";

const PolicyTableOfContents = () => {
    return (
        <div className={cn("mt-16")}>
            <TableOfContentsHeading />
            <ul className={cn("space-y-3 mt-5")}>
                {policy.section2.contents.map((qAndA, index) => (
                    <TableOfContentsItem
                        key={qAndA.goTo}
                        index={index}
                        {...qAndA}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PolicyTableOfContents;
