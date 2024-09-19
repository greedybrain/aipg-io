import { TTier } from "@/types/ai-tools";
import { defaultValues as defaultAiToolValues } from "@/types/zod/ai-tools";
import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "./use-ai-tool-form-context";
import { useState } from "react";

const useTierFieldCrud = () => {
    const [idx, setIdx] = useState<number>(-1);
    const [editMode, setEditMode] = useState<boolean>(false);
    const methods = useAiToolFormContext();
    const tier = methods.watch("pricingInfo.tier");
    const tiers = methods.watch("pricingInfo.tiers");

    const addTier = () => {
        const foundTier = tiers.find(
            (thisTier) =>
                thisTier.name === tier.name ||
                thisTier.description === tier.description,
        );

        if (foundTier) {
            notify({
                type: "error",
                message: "Tier already exists",
                id: "duplicate-tier",
            });

            return;
        }

        const existingTiers = getExistingTiers();
        methods.setValue("pricingInfo.tiers", [...existingTiers, tier]);
        resetTier();
    };

    const editTier = (idx: number, tierToEdit: TTier) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue("pricingInfo.tier", tierToEdit);
    };

    const updateTier = () => {
        const existingTiers = getExistingTiers();

        if (idx > -1) {
            existingTiers[idx] = tier;
            methods.setValue("pricingInfo.tiers", existingTiers);
            resetTier();
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteTier = (tierName: string) => {
        const existingTiers = getExistingTiers();

        methods.setValue(
            "pricingInfo.tiers",
            existingTiers.filter(
                (existingTier) => existingTier.name !== tierName,
            ),
        );
    };

    // Helpers
    const getExistingTiers = () => methods.getValues("pricingInfo.tiers");

    const resetTier = () => {
        methods.resetField("pricingInfo.tier", {
            defaultValue: defaultAiToolValues.pricingInfo.tier,
        });
    };

    return {
        methods,
        editMode,
        tier,
        tiers,
        setEditMode,
        addTier,
        editTier,
        updateTier,
        deleteTier,
    };
};

export default useTierFieldCrud;
