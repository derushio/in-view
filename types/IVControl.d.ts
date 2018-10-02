import { Selectors } from './InView';
import Options, { Offset } from './model/Options';
/**
 * The main interface. Take a selector and retrieve
 * the associated registry or create a new one.
 */
export default class IVControl {
    selector: string;
    selectors: Selectors;
    options: Options;
    /**
     * TODO: 副作用を取る(selectors)
     * @param selector
     * @param selectors
     * @param options
     */
    constructor(selector: string, selectors: Selectors, options: Options);
    /**
     * Mutate the offset object with either an object
     * or a number.
     */
    offset(o?: number | Offset): Offset;
    /**
     * Set the threshold with a number.
     */
    threshold(n: number): number;
    /**
     * Use a custom test, overriding inViewport, to
     * determine element visibility.
     */
    test(fn: (element: HTMLElement, options: Options) => boolean): (element: HTMLElement, options: Options) => boolean;
    /**
     * Add proxy for test function, set defaults,
     * and return the interface.
     */
    is(el: HTMLElement): void;
}
