import { Errors } from "./IPage";

// Utility function to check if all error keys are empty
export const areAllErrorsEmpty = (errors: Errors): boolean => {
    return Object.values(errors).every(error => !error?.trim());
  };
  