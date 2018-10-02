declare const ExtendableError_base: ErrorConstructor;
/**
 * 継承可能 Error Class
 */
export default abstract class ExtendableError<T> extends ExtendableError_base {
    extra: T;
    constructor(message: string, extra: T);
}
export {};
