import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "./use-ai-tool-form-context";
import { useState } from "react";

const useOfferingFieldCrud = () => {
    const [idx, setIdx] = useState<number>(-1);
    const [editMode, setEditMode] = useState<boolean>(false);
    const methods = useAiToolFormContext();
    const offering = methods.watch("pricingInfo.tier.offering");
    const offerings = methods.watch("pricingInfo.tier.offerings");

    const addOffering = () => {
        if (offering) {
            if (offerings.includes(offering)) {
                notify({
                    type: "error",
                    message: "Offering already exists",
                    id: "duplicate-offering",
                });
                return;
            }
            const existingOfferings = methods.getValues(
                "pricingInfo.tier.offerings",
            );
            methods.setValue("pricingInfo.tier.offerings", [
                ...existingOfferings,
                offering,
            ]);
        }
        methods.resetField("pricingInfo.tier.offering");
    };

    const editOffering = (idx: number, offeringToEdit: string) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue("pricingInfo.tier.offering", offeringToEdit);
    };

    const updateOffering = () => {
        const existingOfferings = methods.getValues(
            "pricingInfo.tier.offerings",
        );

        if (offering && idx > -1) {
            existingOfferings[idx] = offering;
            methods.setValue("pricingInfo.tier.offerings", existingOfferings);
            methods.resetField("pricingInfo.tier.offering");
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteOffering = (offering: string) => {
        const existingOfferings = methods.getValues(
            "pricingInfo.tier.offerings",
        );

        methods.setValue(
            "pricingInfo.tier.offerings",
            existingOfferings.filter(
                (existingOffering) => existingOffering !== offering,
            ),
        );
    };

    return {
        methods,
        editMode,
        offering,
        offerings,
        setEditMode,
        addOffering,
        editOffering,
        updateOffering,
        deleteOffering,
    };
};

export default useOfferingFieldCrud;
