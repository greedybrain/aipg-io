import Group from "@/components/layout/group";
import { KeyRound } from "lucide-react";
import MainHeading from "./main-heading";
import ReassuranceMessage from "./reassurance-message";
import ResetPasswordIcon from "@/components/ui/reset-password-icon";
import SendEmailForm from "./send-email-form";
import { cn } from "@/utils/tailwind/tw-merge";

const BeginPasswordReset = () => {
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
            <SendEmailForm />
        </Group>
    );
};

export default BeginPasswordReset;
