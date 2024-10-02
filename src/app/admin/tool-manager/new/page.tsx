import FixedContainer from "@/components/layout/fixed-container";
import NewToolForm from "@/components/features/new-tool-form";
import { cn } from "@/utils/tailwind/tw-merge";

const NewToolPage = () => {
    // server_readMany<"AppUser">({
    //     entityName: "AppUser",
    //     whereClause: "",
    // }).then(({ data }) => console.log("DATA: ", data?.[0]));

    return (
        <main className={cn("min-h-screen")}>
            <FixedContainer>
                <p
                    className={cn(
                        "font-bold text-3xl text-center relative top-40 lg:hidden",
                    )}
                >
                    NEW TOOL FORM MUST BE FILLED OUT ON DESKTOP ONLY
                </p>
                <NewToolForm />
            </FixedContainer>
        </main>
    );
};

export default NewToolPage;
