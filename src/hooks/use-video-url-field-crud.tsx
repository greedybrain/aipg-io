import {
    MEDIA_RESOURCES_VIDEO_URL,
    MEDIA_RESOURCES_VIDEO_URLS,
} from "@/constants";

import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "./use-ai-tool-form-context";

const useVideoURLFieldCrud = () => {
    const methods = useAiToolFormContext();
    const url = methods.watch(MEDIA_RESOURCES_VIDEO_URL);
    const urls = methods.watch(MEDIA_RESOURCES_VIDEO_URLS);

    const addURL = () => {
        if (url) {
            if (urls.includes(url)) {
                notify({
                    type: "error",
                    message: "URL already exists",
                    id: "duplicate-url",
                });
                return;
            }
            const existingURLs = getExistingURLs();
            methods.setValue(MEDIA_RESOURCES_VIDEO_URLS, [
                ...existingURLs,
                url,
            ]);
        }
        resetURL();
    };

    const deleteURL = (url: string) => {
        const existingURLs = getExistingURLs();

        methods.setValue(
            MEDIA_RESOURCES_VIDEO_URLS,
            existingURLs.filter((existingURL) => existingURL !== url),
        );
    };

    // Helpers
    const getExistingURLs = () => methods.getValues(MEDIA_RESOURCES_VIDEO_URLS);

    const resetURL = () => {
        methods.resetField(MEDIA_RESOURCES_VIDEO_URL);
    };

    return {
        methods,
        url,
        urls,
        addURL,
        deleteURL,
    };
};

export default useVideoURLFieldCrud;
