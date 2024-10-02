import { AFFILIATE_API_INFO_AFFILIATE_RESOURCE_URL } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const AffiliateResourceURLField = () => {
    return (
        <NewToolFormField
            name={AFFILIATE_API_INFO_AFFILIATE_RESOURCE_URL}
            placeholder="Enter affiliate or partnership resource URL"
            labelContent="Affiliate or Partnership Resource"
            formDescription="Provide a URL or resource page for affiliate or partnership opportunities related to the tool."
        />
    );
};

export default AffiliateResourceURLField;
