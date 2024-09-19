import { cn } from "@/utils/tailwind/tw-merge";

const BrandBadge = () => {
    return (
        <div
            className={cn(
                "border-2 border-app-tertiary rounded-lg shadow-neobrut2 bg-app-secondary inline-block text-sm font-bold px-5 py-3 -rotate-6 ml-7",
            )}
        >
            AiPlayground
        </div>
    );
};

export default BrandBadge;
