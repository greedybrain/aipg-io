import NewToolFormField from "@/components/common/new-tool-form-field";

const LogoUploadField = () => {
    return (
        <NewToolFormField
            name="basicInfo.logo"
            type="file"
            placeholder="Enter official website URL"
            labelContent="Logo"
            formDescription="Upload the logo image for the tool. Preferably a high-quality image in PNG or JPEG format."
        />
    );
};

export default LogoUploadField;
