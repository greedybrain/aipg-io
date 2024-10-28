import { Button } from "@/components/ui/button";

interface Props {
    offering: string | null;
    addBulkOfferings: () => void;
}

const AddBulkOfferingsButton = ({ offering, addBulkOfferings }: Props) => {
    if (!offering) return null;
    if (!offering.includes("|")) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={addBulkOfferings}>
            Add bulk offerings
        </Button>
    );
};

export default AddBulkOfferingsButton;
