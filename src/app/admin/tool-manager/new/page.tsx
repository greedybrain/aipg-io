import FixedContainer from "@/components/layout/fixed-container";
import NewToolForm from "@/components/features/new-tool-form";
import { cn } from "@/utils/tailwind/tw-merge";

const NewToolPage = () => {
    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <NewToolForm />
            </FixedContainer>
        </main>
    );
};

export default NewToolPage;
