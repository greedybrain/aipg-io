import { APP_EXT_URLS_WINDOWS } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const WindowsStoreURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_WINDOWS}
            placeholder="Enter the Windows Store URL"
            labelContent="Windows Store URL"
            formDescription="Provide the Microsoft Store URL for the Windows version of the tool."
        />
    );
};

export default WindowsStoreURLField;
