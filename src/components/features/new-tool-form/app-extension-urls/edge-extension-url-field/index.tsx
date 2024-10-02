import { APP_EXT_URLS_EDGE } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const EdgeExtensionURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_EDGE}
            placeholder="Enter the Edge Extension URL"
            labelContent="Edge Extension URL"
            formDescription="Provide the Microsoft Edge Add-ons Store URL for the Edge extension."
        />
    );
};

export default EdgeExtensionURLField;
