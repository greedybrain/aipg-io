export const storageErrorMessages: Record<string, string> = {
    NoSuchBucket:
        "We couldn't find the storage location you're looking for. Please try again or contact support if the problem persists.",
    NoSuchKey:
        "The file you're trying to access isn't available. Please check the file name or contact support.",
    NoSuchUpload:
        "We couldn't find the upload you're looking for. It might have been canceled or removed.",
    InvalidJWT: "Your session has expired. Please log in again.",
    InvalidRequest:
        "We couldn't process your request. Please check the information and try again.",
    TenantNotFound:
        "We couldn't complete your request. Please contact support for assistance.",
    EntityTooLarge:
        "The file you're trying to upload is too large. Please try a smaller file.",
    InternalError: "Something went wrong on our end. Please try again later.",
    ResourceAlreadyExists:
        "This item already exists. Please try using a different name or identifier.",
    InvalidBucketName:
        "The name you've chosen for the storage location isn't allowed. Please use a different name.",
    InvalidKey:
        "The file name you entered isn't valid. Please check and try again.",
    InvalidRange:
        "We couldn't access part of the file. Please try again or contact support.",
    InvalidMimeType:
        "The file type you uploaded isn't supported. Please try a different file.",
    InvalidUploadId:
        "We couldn't find the upload you're looking for. Please check and try again.",
    KeyAlreadyExists:
        "A file with this name already exists. Please try a different name.",
    BucketAlreadyExists:
        "A storage location with this name already exists. Please choose a different name.",
    DatabaseTimeout:
        "The system is taking too long to respond. Please try again later.",
    InvalidSignature:
        "There was an issue with your request. Please try again or contact support.",
    SignatureDoesNotMatch:
        "There was an issue with your request. Please check your credentials or try again.",
    AccessDenied:
        "You don't have permission to access this item. Please contact support if you need help.",
    ResourceLocked:
        "This item is currently locked and can't be changed. Please try again later.",
    DatabaseError:
        "There was a problem with the system. Please try again later.",
    MissingContentLength:
        "There was an issue with your upload. Please try again.",
    MissingParameter:
        "Some information is missing from your request. Please check and try again.",
    InvalidUploadSignature:
        "There was an issue with your upload. Please try again.",
    LockTimeout: "The system is busy. Please try again later.",
    S3Error:
        "There was an issue with the storage service. Please contact support.",
    S3InvalidAccessKeyId:
        "We couldn't verify your credentials. Please check and try again.",
    S3MaximumCredentialsLimit:
        "The maximum number of credentials has been reached. Please try again later.",
    InvalidChecksum:
        "There was an issue with the file upload. Please try again.",
    MissingPart:
        "A part of the file is missing. Please check your upload and try again.",
    SlowDown:
        "We're receiving too many requests. Please wait a moment and try again.",
};
