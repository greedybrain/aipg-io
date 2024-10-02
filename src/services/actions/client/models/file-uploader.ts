import { Database } from "@/types/database.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { TUploadFileOrFilesParams } from "@/types";
import { getErrorMessage } from "@/utils/status-messages/get-error-message";
import { storageErrorMessages } from "@/utils/data/error-codes-and-messages/storage-error-messages";

class FileUploader {
    constructor(
        private supabseClient: SupabaseClient<Database, "public">,
        private bucketName: string,
    ) {}

    private uploadHelper = async (file: File): Promise<string> => {
        const { data, error } = await this.supabseClient.storage
            .from(this.bucketName)
            .upload(file.name, file);

        console.log("Return data: ", data);
        console.log("Return error: ", error);

        if (!data || error) throw new Error(storageErrorMessages[error.name]);

        const { publicUrl } = this.supabseClient.storage
            .from(this.bucketName)
            .getPublicUrl(data.path).data;

        if (!publicUrl) throw new Error("Failed to get public URL");

        return publicUrl;
    };

    uploadFileOrFiles = async ({
        isMultiple = false,
        file,
        files,
    }: TUploadFileOrFilesParams) => {
        try {
            if (isMultiple && files && files.length) {
                const urls: string[] = [];
                for (const file of files) {
                    const url = await this.uploadHelper(file);
                    urls.push(url);
                }

                return {
                    success: true,
                    message: "Uploads successful",
                    urls,
                };
            }

            if (!file) throw new Error("A file must be provided");

            const url = await this.uploadHelper(file);
            return {
                success: true,
                message: "Upload successful",
                urls: [url],
            };
        } catch (error) {
            return {
                success: false,
                message: getErrorMessage(error),
                urls: undefined,
            };
        }
    };
}

export default FileUploader;
