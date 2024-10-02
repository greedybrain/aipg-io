import { APP_EXT_URLS_APK } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const APKDownloadURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_APK}
            placeholder="Enter the APK Download URL"
            labelContent="APK Download URL"
            formDescription="Provide the direct APK download URL for the Android version of the tool."
        />
    );
};

export default APKDownloadURLField;
