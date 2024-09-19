import { cn } from "@/utils/tailwind/tw-merge";

const ReassuranceMessage = () => {
    return (
        <p className={cn("text-center mt-3 text-sm text-app-tertiary/75")}>
            Your new password must be different to previously used passwords
        </p>
    );
};

export default ReassuranceMessage;
