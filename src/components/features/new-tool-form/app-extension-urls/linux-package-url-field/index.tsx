import { APP_EXT_URLS_LINUX } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const LinuxPackageURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_LINUX}
            placeholder="Enter the Linux Package URL"
            labelContent="Linux Package URL"
            formDescription="Provide the download URL for the Linux package of the tool."
        />
    );
};

export default LinuxPackageURLField;
