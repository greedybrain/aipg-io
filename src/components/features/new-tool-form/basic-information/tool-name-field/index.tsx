import { BASIC_INFO_NAME } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const ToolNameField = () => {
    return (
        <NewToolFormField
            name={BASIC_INFO_NAME}
            placeholder="Enter tool name"
            labelContent="Tool Name"
            formDescription="The official name of the AI tool or product being added."
        />
    );
};

export default ToolNameField;
