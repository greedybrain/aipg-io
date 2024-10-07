"use client";

import AiToolsList from "./ai-tools-list";
import AiToolsLoading from "./ai-tools-loading";
import FixedContainer from "@/components/layout/fixed-container";
import useAiToolsStore from "@/stores/ai-tools";
import { useEffect } from "react";

const HomeAiToolsListSection = () => {
    const { aiToolsIsLoading, loadAndSetAiTools } = useAiToolsStore(
        (state) => ({
            aiToolsIsLoading: state.aiToolsIsLoading,
            loadAndSetAiTools: state.loadAndSetAiTools,
        }),
    );

    useEffect(() => {
        loadAndSetAiTools();
    }, [loadAndSetAiTools]);

    return (
        <section>
            <FixedContainer>
                {aiToolsIsLoading ? <AiToolsLoading /> : <AiToolsList />}
            </FixedContainer>
        </section>
    );
};

export default HomeAiToolsListSection;
