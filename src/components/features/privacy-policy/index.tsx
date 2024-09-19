import PolicyHeading from "./policy-heading";
import PolicyInquiriesConcerns from "./policy-inquiries-concerns";
import PolicyIntro from "./policy-intro";
import PolicyQAndAs from "./policy-q-and-a";
import PolicyTableOfContents from "./policy-table-of-contents";
import PolicyUpdated from "./policy-updated";

const PrivacyPolicy = () => {
    return (
        <div>
            <PolicyHeading />
            <PolicyUpdated />
            <PolicyIntro />
            <PolicyInquiriesConcerns />
            <PolicyTableOfContents />
            <PolicyQAndAs />
        </div>
    );
};

export default PrivacyPolicy;
