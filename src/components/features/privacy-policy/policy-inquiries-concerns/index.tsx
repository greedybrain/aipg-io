import InquiriesConcernsContent from "./inquiries-concerns-content";
import InquiriesConcernsHeading from "./inquiries-concerns-heading";
import { cn } from "@/utils/tailwind/tw-merge";

const PolicyInquiriesConcerns = () => {
    return (
        <div className={cn("mt-16")}>
            <InquiriesConcernsHeading />
            <InquiriesConcernsContent />
        </div>
    );
};

export default PolicyInquiriesConcerns;
