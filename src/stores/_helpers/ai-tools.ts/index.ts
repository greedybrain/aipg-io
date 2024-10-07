import { AI_TOOL_LOGOS_BUCKET, AI_TOOL_WEB_IMAGES_BUCKET } from "@/constants";

import { uploadFileOrFiles } from "@/services/actions/client/file-manager/uploadFileOrFiles";

export const handleFileUploads = async ({
    file,
    files,
}: {
    file?: File;
    files?: File[];
}) => {
    const { urls: logoUrls } = await uploadFileOrFiles({
        bucketName: AI_TOOL_LOGOS_BUCKET,
        file,
    });
    const { urls: webImagesUrls } = await uploadFileOrFiles({
        bucketName: AI_TOOL_WEB_IMAGES_BUCKET,
        isMultiple: true,
        files,
    });

    let logo = "";
    let webImages: string[] = [];

    if (logoUrls && logoUrls[0]) {
        logo = logoUrls[0];
    }
    if (webImagesUrls) {
        webImages = webImagesUrls;
    }

    return {
        logo,
        webImages,
    };
};
