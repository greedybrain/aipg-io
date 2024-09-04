import { authErrorMessages } from "./error-codes-and-messages/auth-error-messages";
import { storageErrorMessages } from "./error-codes-and-messages/storage-error-messages";

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        const err = error as any;

        if ("code" in err && err.code) {
            if (authErrorMessages[err.code]) {
                message = authErrorMessages[err.code];
            } else if (storageErrorMessages[err.code]) {
                message = storageErrorMessages[err.code];
            } else {
                message = err.message as string;
            }
        } else {
            message = err.message as string;
        }
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
};
