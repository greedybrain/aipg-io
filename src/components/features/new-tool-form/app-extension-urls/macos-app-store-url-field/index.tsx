import { APP_EXT_URLS_MACOS } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const MacOSAppStoreURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_MACOS}
            placeholder="Enter the macOS App Store URL"
            labelContent="macOS App Store URL"
            formDescription="Provide the App Store URL for the macOS version of the tool."
        />
    );
};

export default MacOSAppStoreURLField;
