import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../../data/policy-content";

const IntroContent = () => {
    return <p className={cn("md:text-lg")}>{policy.intro.content}</p>;
};

export default IntroContent;
