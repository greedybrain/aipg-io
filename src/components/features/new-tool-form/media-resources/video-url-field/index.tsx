"use client";

import AddBulkURLsButton from "./add-bulk-urls-button";
import AddURLButton from "./add-url-button";
import AddedURLs from "./added-urls";
import { FormMessage } from "@/components/ui/form";
import Group from "@/components/layout/group";
import { MEDIA_RESOURCES_VIDEO_URL } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { useVideoURLFieldContext } from "@/contexts/video-url-field-context";

const VideoURLField = () => {
    const { urls } = useVideoURLFieldContext();
    const methods = useAiToolFormContext();

    return (
        <Group>
            <NewToolFormField
                name={MEDIA_RESOURCES_VIDEO_URL}
                placeholder="Enter video URLs"
                labelContent="Video URLs"
                formDescription="Provide URLs to any promotional or tutorial videos showcasing the tool.
"
            />
            {!urls.length && (
                <FormMessage>
                    {
                        methods.formState.errors.mediaAndResources?.videoURLs
                            ?.message
                    }
                </FormMessage>
            )}
            <Group className={cn("flex gap-x-3 mt-5")}>
                <AddURLButton />
                <AddBulkURLsButton />
            </Group>
            {urls.length > 0 && <AddedURLs />}
        </Group>
    );
};

export default VideoURLField;
