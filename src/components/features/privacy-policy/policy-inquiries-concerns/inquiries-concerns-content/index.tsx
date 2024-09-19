import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../../data/policy-content";

const InquiriesConcernsContent = () => {
    return <p className={cn("md:text-lg mt-5")}>{policy.section1.content}</p>;
};

export default InquiriesConcernsContent;
