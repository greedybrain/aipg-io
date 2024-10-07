import NewToolFormField from "@/components/common/new-tool-form-field";

const TierAnnualPriceField = () => {
    return (
        <NewToolFormField
            name="pricingInfo.tier.annualPrice"
            placeholder="Enter the annual price"
            labelContent="Annual Price"
            formDescription="Specify the annual price for this tier. Leave blank if this tier doesn't have an annual pricing option."
        />
    );
};

export default TierAnnualPriceField;
