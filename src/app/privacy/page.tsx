import FixedContainer from "@/components/layout/fixed-container";
import PrivacyPolicy from "@/components/features/privacy-policy";
import { cn } from "@/utils/tailwind/tw-merge";

const PrivacyPage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer className={cn("py-16")}>
                <PrivacyPolicy />
            </FixedContainer>
        </main>
    );
};

export default PrivacyPage;
