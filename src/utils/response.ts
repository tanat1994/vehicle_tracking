
import { ISuccessResponse, IErrorResponse } from '../interfaces/response.interface';

export const successResponse = (success: boolean, message: string, data?: any) : ISuccessResponse => {
    return data ? {
        success,
        message,
        data,
    } : { success, message };
}

export const errorResponse = (success: boolean, errMessage: string) : IErrorResponse => {
    return { success, errMessage };
}