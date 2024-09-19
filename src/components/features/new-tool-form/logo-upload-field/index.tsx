import { BASIC_INFO_LOGO } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const LogoUploadField = () => {
    return (
        <NewToolFormField
            name={BASIC_INFO_LOGO}
            type="file"
            placeholder="Enter official website URL"
            labelContent="Company Logo"
            formDescription="Upload the logo image for the tool. Preferably a high-quality image in PNG or JPEG format."
        />
    );
};

export default LogoUploadField;
