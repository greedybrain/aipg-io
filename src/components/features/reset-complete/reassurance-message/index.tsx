import { cn } from "@/utils/tailwind/tw-merge";

const ReassuranceMessage = () => {
    return (
        <p className={cn("text-center mt-3 text-sm text-app-tertiary/75")}>
            Your password has been successfully reset. Click below to log in.
        </p>
    );
};

export default ReassuranceMessage;
