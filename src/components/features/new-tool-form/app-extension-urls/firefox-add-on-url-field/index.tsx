import { APP_EXT_URLS_FIREFOX } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const FirefoxAddOnField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_FIREFOX}
            placeholder="Enter Firefox add-on URL"
            labelContent="Firefox Add-on URL"
            formDescription="If the tool has a Firefox add-on, provide the URL to its Firefox Add-ons page."
        />
    );
};

export default FirefoxAddOnField;
