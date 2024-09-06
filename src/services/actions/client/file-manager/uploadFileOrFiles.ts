import FileUploader from "@/models/file-uploader";
import { TUploadFileOrFilesParams } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const uploadFileOrFiles = async ({
    bucketName,
    isMultiple = false,
    file,
    files,
}: TUploadFileOrFilesParams) => {
    try {
        const supabase = createClient();
        const uploader = new FileUploader(supabase, bucketName);

        return await uploader.uploadFileOrFiles({
            bucketName,
            file,
            files,
            isMultiple,
        });
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            urls: undefined,
        };
    }
};
