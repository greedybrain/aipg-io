import { AFFILIATE_API_INFO_CUSTOM_AFFILIATE_URL } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const CustomAffiliateURLField = () => {
    return (
        <NewToolFormField
            name={AFFILIATE_API_INFO_CUSTOM_AFFILIATE_URL}
            placeholder="Enter custom affiliate link"
            labelContent="Custom Affiliate Link"
            formDescription="If there is a custom affiliate link for this tool, provide the URL here."
        />
    );
};

export default CustomAffiliateURLField;
