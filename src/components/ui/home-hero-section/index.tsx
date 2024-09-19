import BrandBadge from "./brand-badge";
import FixedContainer from "@/components/layout/fixed-container";
import Group from "@/components/layout/group";
import MainHeading from "./main-heading";
import SubHeading from "./sub-heading";
import { cn } from "@/utils/tailwind/tw-merge";

const HomeHeroSection = () => {
    return (
        <section>
            <FixedContainer>
                <Group
                    className={cn(
                        "px-4 max-w-[340px] sm:max-w-[500px] md:max-w-[700px] mx-auto py-20 pb-10",
                    )}
                >
                    <BrandBadge />
                    <MainHeading />
                    <SubHeading />
                </Group>
            </FixedContainer>
        </section>
    );
};

export default HomeHeroSection;
