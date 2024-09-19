import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    offering: string | null;
    addOffering: () => void;
}

const AddOfferingButton = ({ editMode, offering, addOffering }: Props) => {
    if (!offering || offering.includes(",") || editMode) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={addOffering}>
            Add offering
        </Button>
    );
};

export default AddOfferingButton;
