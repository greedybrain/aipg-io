import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    feature: string | null;
    addFeature: () => void;
}

const AddFeatureButton = ({ editMode, feature, addFeature }: Props) => {
    if (!feature || feature.includes(",") || editMode) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={addFeature}>
            Add feature
        </Button>
    );
};

export default AddFeatureButton;
