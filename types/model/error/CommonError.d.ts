import ExtendableError from '@/model/error/ExtendableError';
export declare class CommonError extends ExtendableError<any> {
    constructor(message: string, extra?: any);
}
