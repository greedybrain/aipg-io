import { Button } from "@/components/ui/button";
import { TTier } from "@/types/ai-tools";
import { cn } from "@/utils/tailwind/tw-merge";

interface Props {
    editMode: boolean;
    tier: TTier;
    addTier: () => void;
}

const AddTierButton = ({ editMode, tier, addTier }: Props) => {
    return (
        <Button
            disabled={editMode || !tier.name || !tier.offerings?.length}
            type="button"
            variant={"tertiary"}
            onClick={addTier}
            className={cn("w-[150px]")}
        >
            Add tier
        </Button>
    );
};

export default AddTierButton;
