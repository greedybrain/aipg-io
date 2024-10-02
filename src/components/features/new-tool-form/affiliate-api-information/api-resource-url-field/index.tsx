import { AFFILIATE_API_INFO_API_DOC_URL } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const ApiResourceURLField = () => {
    return (
        <NewToolFormField
            name={AFFILIATE_API_INFO_API_DOC_URL}
            placeholder="Enter API documentation URL"
            labelContent="API Resource URL"
            formDescription="Provide a URL to the tool's API documentation or resource page, if available."
        />
    );
};

export default ApiResourceURLField;
