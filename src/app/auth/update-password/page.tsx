import FinishPasswordReset from "@/components/features/finish-password-reset";
import FixedContainer from "@/components/layout/fixed-container";
import { cn } from "@/utils/tailwind/tw-merge";

const UpdatePasswordPage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <FinishPasswordReset />
            </FixedContainer>
        </main>
    );
};

export default UpdatePasswordPage;
