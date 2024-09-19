import { TTier } from "@/types/ai-tools";
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

        const existingTiers = methods.getValues("pricingInfo.tiers");
        methods.setValue("pricingInfo.tiers", [...existingTiers, tier]);
    };

    const editTier = (idx: number, tierToEdit: TTier) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue("pricingInfo.tier", tierToEdit);
    };

    const updateTier = () => {
        const existingTiers = methods.getValues("pricingInfo.tiers");

        if (idx > -1) {
            existingTiers[idx] = tier;
            methods.setValue("pricingInfo.tiers", existingTiers);
            methods.resetField("pricingInfo.tier", {
                defaultValue: {
                    name: "",
                    description: "",
                    offering: "",
                    offerings: [],
                    price: null,
                },
            });
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteTier = (tierName: string) => {
        const existingTiers = methods.getValues("pricingInfo.tiers");

        methods.setValue(
            "pricingInfo.tiers",
            existingTiers.filter(
                (existingTier) => existingTier.name !== tierName,
            ),
        );
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
