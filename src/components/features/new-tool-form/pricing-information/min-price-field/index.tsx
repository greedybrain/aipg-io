import NewToolFormField from "@/components/common/new-tool-form-field";
import { PRICING_INFO_MIN_PRICE } from "@/constants";

const MinPriceField = () => {
    return (
        <NewToolFormField
            name={PRICING_INFO_MIN_PRICE}
            placeholder="Enter the min price for this tool"
            labelContent="Min Price"
            formDescription="This indicates the lowest amount that someone will pay to use this tool"
        />
    );
};

export default MinPriceField;
