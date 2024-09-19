import FixedContainer from "@/components/layout/fixed-container";
import ResetLinkConfirmation from "@/components/features/reset-link-confirmation";
import { cn } from "@/utils/tailwind/tw-merge";

const ResetLinkConfirmationPage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <ResetLinkConfirmation />
            </FixedContainer>
        </main>
    );
};

export default ResetLinkConfirmationPage;
