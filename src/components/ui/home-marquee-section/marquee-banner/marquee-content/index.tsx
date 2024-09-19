import MarqueeBadge from "../marquee-badge";
import MarqueeLabel from "../marquee-label";
import { cn } from "@/utils/tailwind/tw-merge";

const MarqueeContent = () => {
    return (
        <li className={cn("flex items-center min-w-fit")}>
            <MarqueeLabel />
            <MarqueeBadge />
        </li>
    );
};

export default MarqueeContent;
