import NewToolFormField from "@/components/common/new-tool-form-field";

const DeveloperOrCompanyNameField = () => {
    return (
        <NewToolFormField
            name="basicInfo.developerOrCompanyName"
            placeholder="Enter developer or company name"
            labelContent="Developer or Company Name"
            formDescription="The name of the company or individual who developed the tool."
        />
    );
};

export default DeveloperOrCompanyNameField;
