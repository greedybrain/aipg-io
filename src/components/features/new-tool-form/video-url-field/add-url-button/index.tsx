import { Button } from "@/components/ui/button";

interface Props {
    url: string | null;
    addURL: () => void;
}

const AddURLButton = ({ url, addURL }: Props) => {
    return (
        <Button
            disabled={!url || url.includes(",")}
            type="button"
            variant={"tertiary"}
            onClick={addURL}
        >
            Add url
        </Button>
    );
};

export default AddURLButton;
