import { CircleCheckBig } from "lucide-react";
import ContinueLogin from "./continue-login";
import Group from "@/components/layout/group";
import MainHeading from "./main-heading";
import ReassuranceMessage from "./reassurance-message";
import ResetPasswordIcon from "@/components/ui/reset-password-icon";
import { cn } from "@/utils/tailwind/tw-merge";

const ResetComplete = () => {
    return (
        <Group className={cn("flex flex-col items-center mt-20")}>
            <ResetPasswordIcon
                className={cn("rounded-full shadow-none border-0 bg-green-200")}
                Icon={CircleCheckBig}
                iconProps={{
                    size: 30,
                    className: cn("text-green-500"),
                }}
            />
            <MainHeading />
            <ReassuranceMessage />
            <ContinueLogin />
            {/* <BackToLogin /> */}
        </Group>
    );
};

export default ResetComplete;
