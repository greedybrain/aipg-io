import { APP_EXT_URLS_IOS } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const IOSAppURLField = () => {
    return (
        <NewToolFormField
            name={APP_EXT_URLS_IOS}
            placeholder="Enter iOS App URL"
            labelContent="iOS App URL"
            formDescription="If available, enter the App Store URL for the tool's iOS app."
        />
    );
};

export default IOSAppURLField;
