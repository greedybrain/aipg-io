import { PLATFORM_INFO_FEATURE, PLATFORM_INFO_FEATURES } from "@/constants";

import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "./use-ai-tool-form-context";
import { useState } from "react";

const useFeatureFieldCrud = () => {
    const [idx, setIdx] = useState<number>(-1);
    const [editMode, setEditMode] = useState<boolean>(false);
    const methods = useAiToolFormContext();
    const feature = methods.watch(PLATFORM_INFO_FEATURE);
    const features = methods.watch(PLATFORM_INFO_FEATURES);

    const addFeature = () => {
        if (feature) {
            if (features.includes(feature)) {
                notify({
                    type: "error",
                    message: "Feature already exists",
                    id: "duplicate-feature",
                });
                return;
            }
            const existingFeatures = getExistingFeatures();
            methods.setValue(PLATFORM_INFO_FEATURES, [
                ...existingFeatures,
                feature,
            ]);
        }
        resetFeature();
    };

    const editFeature = (idx: number, featureToEdit: string) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue(PLATFORM_INFO_FEATURE, featureToEdit);
    };

    const updateFeature = () => {
        const existingFeatures = getExistingFeatures();

        if (feature && idx > -1) {
            existingFeatures[idx] = feature;
            methods.setValue(PLATFORM_INFO_FEATURES, existingFeatures);
            resetFeature();
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteFeature = (feature: string) => {
        const existingFeatures = getExistingFeatures();

        methods.setValue(
            PLATFORM_INFO_FEATURES,
            existingFeatures.filter(
                (existingFeature) => existingFeature !== feature,
            ),
        );
    };

    const addBulkFeatures = () => {
        const bulkFeatures = feature ? feature.split("|") : "";

        if (bulkFeatures.length > 0) {
            const existingFeatures = getExistingFeatures();
            methods.setValue(PLATFORM_INFO_FEATURES, [
                ...existingFeatures,
                ...bulkFeatures,
            ]);
        }

        resetFeature();
    };

    // Helpers
    const getExistingFeatures = () => methods.getValues(PLATFORM_INFO_FEATURES);

    const resetFeature = () => {
        methods.resetField(PLATFORM_INFO_FEATURE);
    };

    return {
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
    };
};

export default useFeatureFieldCrud;
