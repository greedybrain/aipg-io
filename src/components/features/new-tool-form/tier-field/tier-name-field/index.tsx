import NewToolFormField from "@/components/common/new-tool-form-field";

const TierNameField = () => {
    return (
        <NewToolFormField
            name="pricingInfo.tier.name"
            placeholder="Enter the tier name"
            labelContent="Tier Name"
            formDescription="Enter the name of this pricing tier, such as 'Basic', 'Pro',  or 'Enterprise'."
        />
    );
};

export default TierNameField;
