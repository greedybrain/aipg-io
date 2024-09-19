import NewToolFormField from "@/components/common/new-tool-form-field";

const DescriptionField = () => {
    return (
        <NewToolFormField
            elementType="textarea"
            name="basicInfo.description"
            placeholder="Enter a detailed description of the tool"
            labelContent="Tool Description"
            formDescription="Provide a detailed description of the tool, including its purpose and key features."
        />
    );
};

export default DescriptionField;
