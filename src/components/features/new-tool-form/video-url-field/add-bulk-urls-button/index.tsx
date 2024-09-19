import { Button } from "@/components/ui/button";

interface Props {
    url: string | null;
    addBulkURLs: () => void;
}

const AddBulkURLsButton = ({ url, addBulkURLs }: Props) => {
    if (!url) return null;
    if (!url.includes(",")) return null;

    return (
        <Button type="button" variant={"tertiary"}>
            Add bulk features
        </Button>
    );
};

export default AddBulkURLsButton;
