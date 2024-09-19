"use client";

import AddBulkOfferingsButton from "./add-bulk-offerings-button";
import AddFeatureButton from "./add-offering-button";
import AddedFeatures from "./added-offerings";
import CancelEditButton from "./cancel-edit-button";
import { FormMessage } from "@/components/ui/form";
import Group from "@/components/layout/group";
import NewToolFormField from "@/components/common/new-tool-form-field";
import UpdateFeatureButton from "./update-offering-button";
import { cn } from "@/utils/tailwind/tw-merge";
import useOfferingFieldCrud from "@/hooks/use-offering-field-crud";

const FeatureField = () => {
    const {
        methods,
        editMode,
        offering,
        offerings,
        setEditMode,
        addOffering,
        editOffering,
        updateOffering,
        deleteOffering,
    } = useOfferingFieldCrud();

    return (
        <Group>
            <NewToolFormField
                name="platformAndTechnicalInfo.feature"
                placeholder="Enter key feature, or features separated by comma"
                labelContent="Key Features"
                formDescription="List the main features of the tool. Each feature should be concise and to the point. To bulk add features, separate each feature with a comma."
            />
            {!offerings.length && (
                <FormMessage>
                    {methods.formState.errors.pricingInfo?.tiers?.message}
                </FormMessage>
            )}
            <Group className={cn("flex gap-x-3 mt-5")}>
                <AddFeatureButton
                    addOffering={addOffering}
                    offering={offering}
                    editMode={editMode}
                />
                <UpdateFeatureButton
                    updateOffering={updateOffering}
                    editMode={editMode}
                />
                <AddBulkOfferingsButton
                    addBulkOfferings={() => null}
                    offering={offering}
                />
                <CancelEditButton
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Group>
            {offerings.length > 0 && (
                <AddedFeatures
                    editMode={editMode}
                    editOffering={editOffering}
                    deleteOffering={deleteOffering}
                />
            )}
        </Group>
    );
};

export default FeatureField;
