import BeginPasswordReset from "@/components/features/begin-password-reset";
import FixedContainer from "@/components/layout/fixed-container";
import { cn } from "@/utils/tailwind/tw-merge";

const PasswordResetPage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <BeginPasswordReset />
            </FixedContainer>
        </main>
    );
};

export default PasswordResetPage;
