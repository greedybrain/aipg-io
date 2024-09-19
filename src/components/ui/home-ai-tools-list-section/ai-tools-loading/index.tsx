import AiToolCardLoading from "./ai-tool-card-loading";
import { cn } from "@/utils/tailwind/tw-merge";

const AiToolsLoading = () => {
    return (
        <ul
            className={cn(
                "mt-14 grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 max-w-[790px] mx-auto lg:max-w-[1100px] lg:grid-cols-3",
            )}
        >
            {Array.from({ length: 9 }).map((_) => (
                <AiToolCardLoading key={crypto.randomUUID()} />
            ))}
        </ul>
    );
};

export default AiToolsLoading;
