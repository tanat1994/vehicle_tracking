export interface IErrorResponse {
    success: boolean;
    errMessage: string;
}

export interface ISuccessResponse {
    success: boolean;
    message: string;
    data?: any;
}