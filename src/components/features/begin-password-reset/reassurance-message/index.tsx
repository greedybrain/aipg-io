import { cn } from "@/utils/tailwind/tw-merge";

const ReassuranceMessage = () => {
    return (
        <p className={cn("text-center mt-3 text-sm text-app-tertiary/75")}>
            {"Don't sweat it, we'll send you reset instructions."}
        </p>
    );
};

export default ReassuranceMessage;
