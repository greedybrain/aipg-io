import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    updateFeature: () => void;
}

const UpdateFeatureButton = ({ editMode, updateFeature }: Props) => {
    if (!editMode) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={updateFeature}>
            Update
        </Button>
    );
};

export default UpdateFeatureButton;
