import NewToolFormField from "@/components/common/new-tool-form-field";

const ToolNameField = () => {
    return (
        <NewToolFormField
            name="basicInfo.name"
            placeholder="Enter tool name"
            labelContent="Tool Name"
            formDescription="The official name of the AI tool or product being added."
        />
    );
};

export default ToolNameField;
