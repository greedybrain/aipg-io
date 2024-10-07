import NewToolFormField from "@/components/common/new-tool-form-field";

const TierMonthlyPriceField = () => {
    return (
        <NewToolFormField
            name="pricingInfo.tier.monthlyPrice"
            placeholder="Enter the monthly price"
            labelContent="Monthly Price"
            formDescription="Specify the monthly price for this tier. Leave blank if this tier doesn't have a monthly pricing option."
        />
    );
};

export default TierMonthlyPriceField;
