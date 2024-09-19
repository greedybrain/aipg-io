import { cn } from "@/utils/tailwind/tw-merge";

const MarqueeBadge = () => {
    return (
        <p
            className={cn(
                "bg-app-tertiary font-bold py-2 px-5 rounded-full text-white w-[200px] text-center text-sm",
            )}
        >
            AI UNLEASHED
        </p>
    );
};

export default MarqueeBadge;
