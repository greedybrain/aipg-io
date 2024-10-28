"use client";

import AddBulkFeaturesButton from "./add-bulk-features-button";
import AddFeatureButton from "./add-feature-button";
import AddedFeatures from "./added-features";
import CancelEditButton from "./cancel-edit-button";
import { FormMessage } from "@/components/ui/form";
import Group from "@/components/layout/group";
import NewToolFormField from "@/components/common/new-tool-form-field";
import { PLATFORM_INFO_FEATURE } from "@/constants";
import UpdateFeatureButton from "./update-feature-button";
import { cn } from "@/utils/tailwind/tw-merge";
import useFeatureFieldCrud from "@/hooks/use-feature-field-crud";

const FeatureField = () => {
    const {
        methods,
        editMode,
        feature,
        features,
        setEditMode,
        addFeature,
        addBulkFeatures,
        editFeature,
        updateFeature,
        deleteFeature,
    } = useFeatureFieldCrud();

    return (
        <Group>
            <NewToolFormField
                name={PLATFORM_INFO_FEATURE}
                placeholder="Enter key feature, or features separated by pipe '|' symbol"
                labelContent="Key Features"
                formDescription="List the main features of the tool. Each feature should be concise and to the point. To bulk add features, separate each feature with a comma."
            />
            {!features.length && (
                <FormMessage>
                    {
                        methods.formState.errors.platformAndTechnicalInfo
                            ?.features?.message
                    }
                </FormMessage>
            )}
            <Group className={cn("flex gap-x-3 mt-5")}>
                <UpdateFeatureButton
                    updateFeature={updateFeature}
                    editMode={editMode}
                />
                <AddFeatureButton
                    addFeature={addFeature}
                    feature={feature}
                    editMode={editMode}
                />
                <AddBulkFeaturesButton
                    addBulkFeatures={addBulkFeatures}
                    feature={feature}
                />
                <CancelEditButton
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Group>
            {features.length > 0 && (
                <AddedFeatures
                    editMode={editMode}
                    editFeature={editFeature}
                    deleteFeature={deleteFeature}
                />
            )}
        </Group>
    );
};

export default FeatureField;
