const storageErrors = {
    no_such_bucket:
        "We couldn't find the storage location you're looking for. Please try again or contact support if the problem persists.",
    no_such_key:
        "The file you're trying to access isn't available. Please check the file name or contact support.",
    no_such_upload:
        "We couldn't find the upload you're looking for. It might have been canceled or removed.",
    invalid_jwt: "Your session has expired. Please log in again.",
    invalid_request:
        "We couldn't process your request. Please check the information and try again.",
    tenant_not_found:
        "We couldn't complete your request. Please contact support for assistance.",
    entity_too_large:
        "The file you're trying to upload is too large. Please try a smaller file.",
    internal_error: "Something went wrong on our end. Please try again later.",
    resource_already_exists:
        "This item already exists. Please try using a different name or identifier.",
    invalid_bucket_name:
        "The name you've chosen for the storage location isn't allowed. Please use a different name.",
    invalid_key:
        "The file name you entered isn't valid. Please check and try again.",
    invalid_range:
        "We couldn't access part of the file. Please try again or contact support.",
    invalid_mime_type:
        "The file type you uploaded isn't supported. Please try a different file.",
    invalid_upload_id:
        "We couldn't find the upload you're looking for. Please check and try again.",
    key_already_exists:
        "A file with this name already exists. Please try a different name.",
    bucket_already_exists:
        "A storage location with this name already exists. Please choose a different name.",
    database_timeout:
        "The system is taking too long to respond. Please try again later.",
    invalid_signature:
        "There was an issue with your request. Please try again or contact support.",
    signature_does_not_match:
        "There was an issue with your request. Please check your credentials or try again.",
    access_denied:
        "You don't have permission to access this item. Please contact support if you need help.",
    resource_locked:
        "This item is currently locked and can't be changed. Please try again later.",
    database_error:
        "There was a problem with the system. Please try again later.",
    missing_content_length:
        "There was an issue with your upload. Please try again.",
    missing_parameter:
        "Some information is missing from your request. Please check and try again.",
    invalid_upload_signature:
        "There was an issue with your upload. Please try again.",
    lock_timeout: "The system is busy. Please try again later.",
    s3_error:
        "There was an issue with the storage service. Please contact support.",
    s3_invalid_access_key_id:
        "We couldn't verify your credentials. Please check and try again.",
    s3_maximum_credentials_limit:
        "The maximum number of credentials has been reached. Please try again later.",
    invalid_checksum:
        "There was an issue with the file upload. Please try again.",
    missing_part:
        "A part of the file is missing. Please check your upload and try again.",
    slow_down:
        "We're receiving too many requests. Please wait a moment and try again.",
} as const;

export default storageErrors;

// const storageErrors = {
//   NoSuchBucket:
//     "We couldn't find the storage location you're looking for. Please try again or contact support if the problem persists.",
//   NoSuchKey:
//     "The file you're trying to access isn't available. Please check the file name or contact support.",
//   NoSuchUpload:
//     "We couldn't find the upload you're looking for. It might have been canceled or removed.",
//   InvalidJWT: "Your session has expired. Please log in again.",
//   InvalidRequest:
//     "We couldn't process your request. Please check the information and try again.",
//   TenantNotFound:
//     "We couldn't complete your request. Please contact support for assistance.",
//   EntityTooLarge:
//     "The file you're trying to upload is too large. Please try a smaller file.",
//   InternalError: "Something went wrong on our end. Please try again later.",
//   ResourceAlreadyExists:
//     "This item already exists. Please try using a different name or identifier.",
//   InvalidBucketName:
//     "The name you've chosen for the storage location isn't allowed. Please use a different name.",
//   InvalidKey:
//     "The file name you entered isn't valid. Please check and try again.",
//   InvalidRange:
//     "We couldn't access part of the file. Please try again or contact support.",
//   InvalidMimeType:
//     "The file type you uploaded isn't supported. Please try a different file.",
//   InvalidUploadId:
//     "We couldn't find the upload you're looking for. Please check and try again.",
//   KeyAlreadyExists:
//     "A file with this name already exists. Please try a different name.",
//   BucketAlreadyExists:
//     "A storage location with this name already exists. Please choose a different name.",
//   DatabaseTimeout:
//     "The system is taking too long to respond. Please try again later.",
//   InvalidSignature:
//     "There was an issue with your request. Please try again or contact support.",
//   SignatureDoesNotMatch:
//     "There was an issue with your request. Please check your credentials or try again.",
//   AccessDenied:
//     "You don't have permission to access this item. Please contact support if you need help.",
//   ResourceLocked:
//     "This item is currently locked and can't be changed. Please try again later.",
//   DatabaseError: "There was a problem with the system. Please try again later.",
//   MissingContentLength:
//     "There was an issue with your upload. Please try again.",
//   MissingParameter:
//     "Some information is missing from your request. Please check and try again.",
//   InvalidUploadSignature:
//     "There was an issue with your upload. Please try again.",
//   LockTimeout: "The system is busy. Please try again later.",
//   S3Error:
//     "There was an issue with the storage service. Please contact support.",
//   S3InvalidAccessKeyId:
//     "We couldn't verify your credentials. Please check and try again.",
//   S3MaximumCredentialsLimit:
//     "The maximum number of credentials has been reached. Please try again later.",
//   InvalidChecksum: "There was an issue with the file upload. Please try again.",
//   MissingPart:
//     "A part of the file is missing. Please check your upload and try again.",
//   SlowDown:
//     "We're receiving too many requests. Please wait a moment and try again.",
// } as const;

// export default storageErrors;
