import NewToolFormField from "@/components/common/new-tool-form-field";

const OfficialWebsiteURLField = () => {
    return (
        <NewToolFormField
            name="basicInfo.officialWebsiteURL"
            placeholder="Enter official website URL"
            labelContent="Official Website URL"
            formDescription="The primary website where the tool or product can be accessed or purchased."
        />
    );
};

export default OfficialWebsiteURLField;
