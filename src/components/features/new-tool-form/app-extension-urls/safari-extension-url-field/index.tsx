import { APP_EXT_URLS_SAFARI } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const SafariExtensionURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_SAFARI}
            placeholder="Enter the Safari Extension URL"
            labelContent="Safari Extension URL"
            formDescription="Provide the Safari extension URL for the tool, if available."
        />
    );
};

export default SafariExtensionURLField;
