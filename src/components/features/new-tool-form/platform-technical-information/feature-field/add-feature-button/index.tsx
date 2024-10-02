import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    feature: string | null;
    addFeature: () => void;
}

const AddFeatureButton = ({ editMode, feature, addFeature }: Props) => {
    return (
        <Button
            disabled={!feature || feature.includes(",") || editMode}
            type="button"
            variant={"tertiary"}
            onClick={addFeature}
        >
            Add feature
        </Button>
    );
};

export default AddFeatureButton;
