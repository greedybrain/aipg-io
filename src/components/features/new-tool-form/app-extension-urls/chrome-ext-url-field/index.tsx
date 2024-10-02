import { APP_EXT_URLS_CHROME } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const ChromeExtensionURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_CHROME}
            placeholder="Enter the Chrome Extension URL"
            labelContent="Enter Chrome extension URL"
            formDescription="If the tool has a Chrome extension, provide the URL to its Chrome Web Store listing."
        />
    );
};

export default ChromeExtensionURLField;
