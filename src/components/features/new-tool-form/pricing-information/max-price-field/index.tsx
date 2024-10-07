import NewToolFormField from "@/components/common/new-tool-form-field";
import { PRICING_INFO_MAX_PRICE } from "@/constants";

const MaxPriceField = () => {
    return (
        <NewToolFormField
            name={PRICING_INFO_MAX_PRICE}
            placeholder="Enter the max price for this tool"
            labelContent="Max Price"
            formDescription="This indicates the most that someone will pay to use this tool"
        />
    );
};

export default MaxPriceField;
