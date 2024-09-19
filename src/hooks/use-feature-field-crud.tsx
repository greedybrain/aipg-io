import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "./use-ai-tool-form-context";
import { useState } from "react";

const useFeatureFieldCrud = () => {
    const [idx, setIdx] = useState<number>(-1);
    const [editMode, setEditMode] = useState<boolean>(false);
    const methods = useAiToolFormContext();
    const feature = methods.watch("platformAndTechnicalInfo.feature");
    const features = methods.watch("platformAndTechnicalInfo.features");

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
            methods.setValue("platformAndTechnicalInfo.features", [
                ...existingFeatures,
                feature,
            ]);
        }
        resetFeature();
    };

    const editFeature = (idx: number, featureToEdit: string) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue("platformAndTechnicalInfo.feature", featureToEdit);
    };

    const updateFeature = () => {
        const existingFeatures = getExistingFeatures();

        if (feature && idx > -1) {
            existingFeatures[idx] = feature;
            methods.setValue(
                "platformAndTechnicalInfo.features",
                existingFeatures,
            );
            resetFeature();
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteFeature = (feature: string) => {
        const existingFeatures = getExistingFeatures();

        methods.setValue(
            "platformAndTechnicalInfo.features",
            existingFeatures.filter(
                (existingFeature) => existingFeature !== feature,
            ),
        );
    };

    // Helpers
    const getExistingFeatures = () =>
        methods.getValues("platformAndTechnicalInfo.features");

    const resetFeature = () => {
        methods.resetField("platformAndTechnicalInfo.feature");
    };

    return {
        methods,
        editMode,
        feature,
        features,
        setEditMode,
        addFeature,
        editFeature,
        updateFeature,
        deleteFeature,
    };
};

export default useFeatureFieldCrud;
