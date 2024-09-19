import CTAMessage from "./search-examples/cta-message";
import FixedContainer from "@/components/layout/fixed-container";
import Group from "@/components/layout/group";
import HomeSearchContextProvider from "@/contexts/home-search-context";
import Search from "./search";
import SearchExamples from "./search-examples";
import { cn } from "@/utils/tailwind/tw-merge";

const HomeSearchSection = () => {
    return (
        <section>
            <FixedContainer>
                <HomeSearchContextProvider>
                    <Group className={cn("max-w-[700px] mx-auto")}>
                        <Search />
                        <SearchExamples />
                        <CTAMessage />
                    </Group>
                </HomeSearchContextProvider>
            </FixedContainer>
        </section>
    );
};

export default HomeSearchSection;
