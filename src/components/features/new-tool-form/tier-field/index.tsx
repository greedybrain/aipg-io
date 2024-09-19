"use client";

import AddTierButton from "./add-tier-button";
import AddedTiers from "./added-tiers";
import CancelEditButton from "./cancel-edit-button";
import { FormMessage } from "@/components/ui/form";
import Group from "@/components/layout/group";
import TierAnnualPriceField from "./tier-annual-price-field";
import TierDescriptionField from "./tier-description-field";
import TierMonthlyPriceField from "./tier-monthly-price-field";
import TierNameField from "./tier-name-field";
import TierOfferingField from "./tier-offering-field";
import UpdateTierButton from "./update-tier-button";
import { cn } from "@/utils/tailwind/tw-merge";
import useTierFieldCrud from "@/hooks/use-tier-field-crud";

const TierField = () => {
    const {
        methods,
        editMode,
        tier,
        tiers,
        setEditMode,
        addTier,
        editTier,
        updateTier,
        deleteTier,
    } = useTierFieldCrud();

    return (
        <Group>
            <fieldset
                className={cn("border-2 border-app-tertiary/10 p-5 space-y-5")}
            >
                <legend className={cn("text-2xl font-bold")}>
                    Tier Information
                </legend>
                <TierNameField />
                <TierDescriptionField />
                <TierMonthlyPriceField />
                <TierAnnualPriceField />
                <TierOfferingField />
                {!tiers.length && (
                    <FormMessage>
                        {methods.formState.errors.pricingInfo?.tiers?.message}
                    </FormMessage>
                )}
                <Group className={cn("flex gap-x-3 mt-5")}>
                    <AddTierButton
                        addTier={addTier}
                        tier={tier}
                        editMode={editMode}
                    />
                    <UpdateTierButton
                        updateTier={updateTier}
                        editMode={editMode}
                    />
                    <CancelEditButton
                        editMode={editMode}
                        setEditMode={setEditMode}
                    />
                </Group>
                {tiers.length > 0 && (
                    <AddedTiers
                        editMode={editMode}
                        editTier={editTier}
                        deleteTier={deleteTier}
                    />
                )}
            </fieldset>
        </Group>
    );
};

export default TierField;
