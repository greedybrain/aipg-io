import { getErrorMessage } from "@/utils/status-messages/get-error-message";

export const withTryCatch = async <T>(
    asyncFn: () => Promise<T | void>,
    message: string,
) => {
    try {
        const data = await asyncFn();

        if (!data) throw new Error("Something went wrong. Try again later.");

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
