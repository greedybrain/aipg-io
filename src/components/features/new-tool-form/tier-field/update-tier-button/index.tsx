import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    updateTier: () => void;
}

const UpdateTierButton = ({ editMode, updateTier }: Props) => {
    if (!editMode) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={updateTier}>
            Update
        </Button>
    );
};

export default UpdateTierButton;
