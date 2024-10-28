import { useEffect, useRef } from "react";

import { AiToolSchema } from "@/types/zod/ai-tools";
import { TSelectIntegration } from "@/db/drizzle/schemas/integrations";
import { TSelectTag } from "@/db/drizzle/schemas/tags";
import { UseFormReturn } from "react-hook-form";
import z from "zod";

interface IUseAiToolFormDraftArgs {
    methods: UseFormReturn<z.infer<typeof AiToolSchema>>;
    selectedTags: Record<string, TSelectTag>;
    selectedIntegrations: Record<string, TSelectIntegration>;
    resetSelectedTags: (selectedTags?: Record<string, TSelectTag>) => void;
    resetSelectedIntegrations: (
        selectedIntegrations?: Record<string, TSelectIntegration>,
    ) => void;
}

const useAiToolFormDraft = ({
    methods,
    selectedTags,
    selectedIntegrations,
    resetSelectedIntegrations,
    resetSelectedTags,
}: IUseAiToolFormDraftArgs) => {
    const selectedTagsRef = useRef(selectedTags);
    const selectedIntegrationsRef = useRef(selectedIntegrations);

    useEffect(() => {
        // Revive the draft once when the component mounts
        const savedDraft = localStorage.getItem("savedDraft");
        if (savedDraft) {
            methods.reset(JSON.parse(savedDraft));
        }
    }, [methods, resetSelectedIntegrations, resetSelectedTags]);

    useEffect(() => {
        // Save the draft continuously whenever form values change
        const subscription = methods.watch((value) => {
            localStorage.setItem("savedDraft", JSON.stringify(value));
        });

        // Cleanup the subscription to prevent memory leaks
        return () => subscription.unsubscribe();
    }, [methods, selectedIntegrations, selectedTags]);

    useEffect(() => {
        const savedTagsDraft = localStorage.getItem("savedTagsDraft");
        if (savedTagsDraft) {
            const savedTagsDraftParsed = JSON.parse(savedTagsDraft) as Record<
                string,
                TSelectTag
            >;
            resetSelectedTags(savedTagsDraftParsed);
        }
    }, [resetSelectedTags]);

    useEffect(() => {
        const savedIntegrationsDraft = localStorage.getItem(
            "savedIntegrationsDraft",
        );
        if (savedIntegrationsDraft) {
            const savedIntegrationsDraftParsed = JSON.parse(
                savedIntegrationsDraft,
            ) as Record<string, TSelectIntegration>;
            resetSelectedIntegrations(savedIntegrationsDraftParsed);
        }
    }, [resetSelectedIntegrations]);

    useEffect(() => {
        const stringifiedTags = JSON.stringify(selectedTags);
        const stringifiedTagsRefCurrent = JSON.stringify(
            selectedTagsRef.current,
        );

        if (stringifiedTags !== stringifiedTagsRefCurrent) {
            localStorage.setItem(
                "savedTagsDraft",
                JSON.stringify(selectedTags),
            );
            selectedTagsRef.current = selectedTags;
        }
    }, [selectedTags]);

    useEffect(() => {
        const stringifiedIntegrations = JSON.stringify(selectedIntegrations);
        const stringifiedIntegrationsRefCurrent = JSON.stringify(
            selectedIntegrationsRef.current,
        );

        if (stringifiedIntegrations !== stringifiedIntegrationsRefCurrent) {
            localStorage.setItem(
                "savedIntegrationsDraft",
                JSON.stringify(selectedIntegrations),
            );
            selectedIntegrationsRef.current = selectedIntegrations;
        }
    }, [selectedIntegrations]);

    return {
        selectedIntegrations,
        selectedTags,
        resetSelectedIntegrations,
        resetSelectedTags,
    };
};

export default useAiToolFormDraft;
