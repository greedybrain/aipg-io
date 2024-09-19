import Group from "@/components/layout/group";
import { KeyRound } from "lucide-react";
import MainHeading from "./main-heading";
import ReassuranceMessage from "./reassurance-message";
import ResetPasswordIcon from "@/components/ui/reset-password-icon";
import SetNewPasswordForm from "./new-password-form";
import { cn } from "@/utils/tailwind/tw-merge";

const FinishPasswordReset = () => {
    return (
        <Group className={cn("flex flex-col items-center mt-20")}>
            <ResetPasswordIcon
                Icon={KeyRound}
                iconProps={{
                    size: 30,
                }}
            />
            <MainHeading />
            <ReassuranceMessage />
            <SetNewPasswordForm />
        </Group>
    );
};

export default FinishPasswordReset;
