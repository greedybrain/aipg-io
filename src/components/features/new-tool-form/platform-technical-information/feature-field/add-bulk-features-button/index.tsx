import { Button } from "@/components/ui/button";

interface Props {
    feature: string | null;
    addBulkFeatures: () => void;
}

const AddBulkFeaturesButton = ({ feature, addBulkFeatures }: Props) => {
    if (!feature) return null;
    if (!feature.includes("|")) return null;

    return (
        <Button type="button" variant={"tertiary"}>
            Add bulk features
        </Button>
    );
};

export default AddBulkFeaturesButton;
