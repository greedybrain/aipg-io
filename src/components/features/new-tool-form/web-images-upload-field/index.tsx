import { MEDIA_RESOURCES_WEB_IMAGES } from "@/constants";
import NewToolFormField from "@/components/common/new-tool-form-field";

const WebImagesUploadField = () => {
    return (
        <NewToolFormField
            name={MEDIA_RESOURCES_WEB_IMAGES}
            type="file"
            placeholder="Upload web images (JPEG/PNG, max 3MB)"
            labelContent="Web Images"
            formDescription="Upload images related to the tool for use on the website. This could include screenshots or promotional images."
        />
    );
};

export default WebImagesUploadField;
