"use client";

import { Button } from "@/components/ui/button";
import { useVideoURLFieldContext } from "@/contexts/video-url-field-context";

const AddBulkURLsButton = () => {
    const { url, addBulkURLs } = useVideoURLFieldContext();

    if (!url) return null;
    if (!url.includes(",")) return null;

    return (
        <Button type="button" variant={"tertiary"} onClick={addBulkURLs}>
            Add bulk features
        </Button>
    );
};

export default AddBulkURLsButton;
