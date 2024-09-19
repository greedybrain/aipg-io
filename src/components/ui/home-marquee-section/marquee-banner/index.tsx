import MarqueeContent from "./marquee-content";
import { cn } from "@/utils/tailwind/tw-merge";

const MarqueeBanner = () => {
    return (
        <div
            className={cn(
                "border-t-2 border-b-2 border-app-tertiary bg-app-secondary flex h-[70px] items-center mt-20 md:mt-28 overflow-hidden px-3",
            )}
        >
            <ul className={cn("flex gap-x-10 items-center")}>
                {Array.from({ length: 1000 }).map((_, index) => (
                    <MarqueeContent key={index} />
                ))}
            </ul>
        </div>
    );
};

export default MarqueeBanner;
