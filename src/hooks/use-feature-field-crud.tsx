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
            const existingFeatures = methods.getValues(
                "platformAndTechnicalInfo.features",
            );
            methods.setValue("platformAndTechnicalInfo.features", [
                ...existingFeatures,
                feature,
            ]);
        }
        methods.resetField("platformAndTechnicalInfo.feature");
    };

    const editFeature = (idx: number, featureToEdit: string) => {
        setEditMode(true);
        setIdx(idx);
        methods.setValue("platformAndTechnicalInfo.feature", featureToEdit);
    };

    const updateFeature = () => {
        const existingFeatures = methods.getValues(
            "platformAndTechnicalInfo.features",
        );

        if (feature && idx > -1) {
            existingFeatures[idx] = feature;
            methods.setValue(
                "platformAndTechnicalInfo.features",
                existingFeatures,
            );
            methods.resetField("platformAndTechnicalInfo.feature");
            setEditMode(false);
            setIdx(-1);
        }
    };

    const deleteFeature = (feature: string) => {
        const existingFeatures = methods.getValues(
            "platformAndTechnicalInfo.features",
        );

        methods.setValue(
            "platformAndTechnicalInfo.features",
            existingFeatures.filter(
                (existingFeature) => existingFeature !== feature,
            ),
        );
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
