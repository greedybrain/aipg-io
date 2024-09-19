import { Button } from "@/components/ui/button";
import { TTier } from "@/types/ai-tools";

interface Props {
    editMode: boolean;
    tier: TTier;
    addTier: () => void;
}

const AddTierButton = ({ editMode, tier, addTier }: Props) => {
    if (editMode || !tier.name || !tier.offerings.length) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={addTier}>
            Add feature
        </Button>
    );
};

export default AddTierButton;
