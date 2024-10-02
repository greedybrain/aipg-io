import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const withTryCatch = async <T>(
    asyncFn: () => Promise<T>,
    message: string,
) => {
    try {
        const data = await asyncFn();

        return {
            success: true,
            message,
            data,
        };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(error),
            data: undefined,
        };
    }
};
