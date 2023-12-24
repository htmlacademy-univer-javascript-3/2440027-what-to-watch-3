interface ValidationErrorDetail {
    property: string;
    messages: string[];
}

export interface ValidationErrorResponse {
    errorType: string;
    message: string;
    details: ValidationErrorDetail[];
}
