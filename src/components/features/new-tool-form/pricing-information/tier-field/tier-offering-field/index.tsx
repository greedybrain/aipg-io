"use client";

import AddBulkOfferingsButton from "./add-bulk-offerings-button";
import AddOfferingButton from "./add-offering-button";
import AddedOfferings from "./added-offerings";
import CancelEditButton from "./cancel-edit-button";
import { FormMessage } from "@/components/ui/form";
import Group from "@/components/layout/group";
import NewToolFormField from "@/components/common/new-tool-form-field";
import { PRICING_INFO_TIER_OFFERING } from "@/constants";
import UpdateOfferingButton from "./update-offering-button";
import { cn } from "@/utils/tailwind/tw-merge";
import useOfferingFieldCrud from "@/hooks/use-offering-field-crud";

const TierOfferingField = () => {
    const {
        methods,
        editMode,
        offering,
        offerings,
        setEditMode,
        addOffering,
        addBulkOfferings,
        editOffering,
        updateOffering,
        deleteOffering,
    } = useOfferingFieldCrud();

    return (
        <Group>
            <NewToolFormField
                name={PRICING_INFO_TIER_OFFERING}
                placeholder="Enter a offering, or multiple separated by comma"
                labelContent="Tier Offerings"
                formDescription="List the offerings included in this tier, separated by commas (e.g., 'Access to API, 24/7 Support, 100 GB Storage')."
            />
            {!offerings.length && (
                <FormMessage>
                    {methods.formState.errors.pricingInfo?.tiers?.message}
                </FormMessage>
            )}
            <Group className={cn("flex gap-x-3 mt-5")}>
                <AddOfferingButton
                    addOffering={addOffering}
                    offering={offering}
                    editMode={editMode}
                />
                <UpdateOfferingButton
                    updateOffering={updateOffering}
                    editMode={editMode}
                />
                <AddBulkOfferingsButton
                    addBulkOfferings={addBulkOfferings}
                    offering={offering}
                />
                <CancelEditButton
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Group>
            {offerings.length > 0 && (
                <AddedOfferings
                    editMode={editMode}
                    editOffering={editOffering}
                    deleteOffering={deleteOffering}
                />
            )}
        </Group>
    );
};

export default TierOfferingField;
