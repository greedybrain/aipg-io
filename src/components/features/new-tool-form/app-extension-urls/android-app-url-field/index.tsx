import { APP_EXT_URLS_ANDROID } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const AndroidAppURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_ANDROID}
            placeholder="Enter Android App URL"
            labelContent="Android App URL"
            formDescription="If available, enter the Google Play Store URL for the tool's Android app."
        />
    );
};

export default AndroidAppURLField;
