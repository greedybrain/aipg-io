import HomeAiToolsListSection from "@/components/ui/home-ai-tools-list-section";
import HomeFiltersSection from "@/components/ui/home-filters-section";
import HomeHeroSection from "@/components/ui/home-hero-section";
import HomeMarqueeSection from "@/components/ui/home-marquee-section";
import HomeSearchSection from "@/components/ui/home-search-section";

export default async function Home() {
    return (
        <main className="min-h-screen">
            <HomeHeroSection />
            <HomeSearchSection />
            <HomeMarqueeSection />
            <HomeFiltersSection />
            <HomeAiToolsListSection />
        </main>
    );
}
