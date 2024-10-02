"use client";

import { Button } from "@/components/ui/button";
import { useVideoURLFieldContext } from "@/contexts/video-url-field-context";

const AddURLButton = () => {
    const { url, addURL } = useVideoURLFieldContext();

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
