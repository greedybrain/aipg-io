import NewToolFormField from "@/components/common/new-tool-form-field";
import { PRICING_INFO_PRICE_INFO_URL } from "@/constants";

const PriceInfoURLField = () => {
    return (
        <NewToolFormField
            name={PRICING_INFO_PRICE_INFO_URL}
            placeholder="Enter link to pricing information"
            labelContent="Link to Pricing Information"
            formDescription="Provide the URL where users can view detailed pricing information for the tool."
        />
    );
};

export default PriceInfoURLField;
