export default interface Options {
    threshold: number;
    offset: Offset;
    test: (element: HTMLElement, options: Options) => boolean;
}

export interface Offset {
    [dim: string]: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
