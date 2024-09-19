import AiLabel from "./ai-label";
import { cn } from "@/utils/tailwind/tw-merge";

const MainHeading = () => {
    return (
        <h1
            className={cn(
                "font-extrabold text-4xl text-center sm:text-5xl md:text-7xl",
            )}
        >
            Your portal to the future of <AiLabel />
        </h1>
    );
};

export default MainHeading;
