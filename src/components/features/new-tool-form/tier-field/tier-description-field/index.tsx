import NewToolFormField from "@/components/common/new-tool-form-field";

const TierDescriptionField = () => {
    return (
        <NewToolFormField
            elementType="textarea"
            name="pricingInfo.tier.description"
            placeholder="Enter the tier description"
            labelContent="Tier Description"
            formDescription="Provide a brief description of the features or benefits included in this pricing tier."
        />
    );
};

export default TierDescriptionField;
