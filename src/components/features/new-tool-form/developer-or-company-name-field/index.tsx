import { BASIC_INFO_COMPANY_NAME } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const DeveloperOrCompanyNameField = () => {
    return (
        <NewToolFormField
            name={BASIC_INFO_COMPANY_NAME}
            placeholder="Enter developer or company name"
            labelContent="Developer or Company Name"
            formDescription="The name of the company or individual who developed the tool."
        />
    );
};

export default DeveloperOrCompanyNameField;
