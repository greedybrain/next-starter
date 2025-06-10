import authErrors from "./sb-auth-errors";
import storageErrors from "./sb-storage-errors";

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    const err = error;

    if ("code" in err && err.code) {
      if (authErrors[err.code as keyof typeof authErrors]) {
        message = authErrors[err.code as keyof typeof authErrors];
      } else if (storageErrors[err.code as keyof typeof storageErrors]) {
        message = storageErrors[err.code as keyof typeof storageErrors];
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
