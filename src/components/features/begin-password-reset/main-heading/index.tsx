import { cn } from "@/utils/tailwind/tw-merge";

const MainHeading = () => {
    return (
        <h1 className={cn("font-bold text-3xl text-center mt-5")}>
            Forgot password?
        </h1>
    );
};

export default MainHeading;