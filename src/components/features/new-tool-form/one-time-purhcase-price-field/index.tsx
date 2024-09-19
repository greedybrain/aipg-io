import NewToolFormField from "@/components/common/new-tool-form-field";

const OneTimePurchasePriceField = () => {
    return (
        <NewToolFormField
            name="pricingInfo.oneTimePurchasePrice"
            placeholder="Enter one-time purchase price"
            labelContent="One-Time Purchase Price"
            formDescription="If applicable, enter the price for a one-time purchase option. Leave empty if the tool does not offer this."
        />
    );
};

export default OneTimePurchasePriceField;
