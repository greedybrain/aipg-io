import BackToLogin from "@/components/common/back-to-login";
import ClickToResend from "./click-to-resend";
import Group from "@/components/layout/group";
import { MailSearchIcon } from "lucide-react";
import MainHeading from "./main-heading";
import OpenEmailApp from "./open-email-app";
import ReassuranceMessage from "./reassurance-message";
import ResetPasswordIcon from "@/components/ui/reset-password-icon";
import { cn } from "@/utils/tailwind/tw-merge";

const ResetLinkConfirmation = () => {
    return (
        <Group className={cn("flex flex-col items-center mt-20")}>
            <ResetPasswordIcon
                Icon={MailSearchIcon}
                iconProps={{
                    size: 30,
                }}
            />
            <MainHeading />
            <ReassuranceMessage />
            <OpenEmailApp />
            <ClickToResend />
            <BackToLogin />
        </Group>
    );
};

export default ResetLinkConfirmation;
