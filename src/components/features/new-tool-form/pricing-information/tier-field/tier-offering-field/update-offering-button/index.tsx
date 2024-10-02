import { Button } from "@/components/ui/button";

interface Props {
    editMode: boolean;
    updateOffering: () => void;
}

const UpdateOfferingButton = ({ editMode, updateOffering }: Props) => {
    if (!editMode) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={updateOffering}>
            Update
        </Button>
    );
};

export default UpdateOfferingButton;
