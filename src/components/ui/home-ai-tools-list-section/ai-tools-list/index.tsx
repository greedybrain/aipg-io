"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import useAiToolsStore from "@/stores/ai-tools";

const AiToolsList = () => {
    const { aiToolsRecord } = useAiToolsStore((state) => ({
        aiToolsRecord: state.aiToolsRecord,
    }));

    console.log("aiToolsRecord: ", aiToolsRecord);

    return (
        <ul
            className={cn(
                "mt-14 grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 max-w-[790px] mx-auto lg:max-w-[1100px] lg:grid-cols-3",
            )}
        >
            {Object.values(aiToolsRecord).map((tool) => (
                <li key={tool.id}>{tool.name}</li>
            ))}
        </ul>
    );
};

export default AiToolsList;
