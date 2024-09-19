import FixedContainer from "@/components/layout/fixed-container";
import ResetComplete from "@/components/features/reset-complete";
import { cn } from "@/utils/tailwind/tw-merge";

const ResetCompletePage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <ResetComplete />
            </FixedContainer>
        </main>
    );
};

export default ResetCompletePage;
