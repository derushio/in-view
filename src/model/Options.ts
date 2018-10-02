export default interface Options {
    threshold: number;
    offset: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    test: (element: HTMLElement, options: Options) => boolean;
}
