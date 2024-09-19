import FiltersMenuTrigger from "@/components/widgets/filters-menu-trigger";
import FixedContainer from "@/components/layout/fixed-container";
import SortFilterContextProvider from "@/contexts/sort-filter-context";
import { cn } from "@/utils/tailwind/tw-merge";

const HomeFiltersSection = () => {
    return (
        <section>
            <FixedContainer
                className={cn(
                    "max-w-[790px] mx-auto lg:max-w-[1100px] lg:px-0",
                )}
            >
                <SortFilterContextProvider>
                    <FiltersMenuTrigger />
                </SortFilterContextProvider>
            </FixedContainer>
        </section>
    );
};

export default HomeFiltersSection;
