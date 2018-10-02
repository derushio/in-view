import { Selectors } from './InView';
import Registry from './Registry';
import Options, { Offset } from './model/Options';

/**
 * The main interface. Take a selector and retrieve
 * the associated registry or create a new one.
 */
export default class IVControl {
    public selector: string;
    public selectors: Selectors;
    public options: Options;
    public registry: Registry;

    /**
     * TODO: 副作用を取る(selectors)
     * @param selector
     * @param selectors
     * @param options
     */
    public constructor(selector: string, selectors: Selectors, options: Options) {
        this.selector = selector;
        this.selectors = selectors;
        this.options = options;

        // Get an up-to-date list of elements.
        const elements = [].slice.call(document.querySelectorAll(selector));

        if (selectors.history.indexOf(selector) > -1) {
            // If the registry exists, update the elements.
            (selectors[selector] as Registry).elements = elements;
        } else {
            // If it doesn't exist, create a new registry.
            selectors[selector] = new Registry(elements, options);
            selectors.history.push(selector);
        }

        this.offset(0);

        this.registry = this.selectors[this.selector] as Registry;
    }

    /**
     * Mutate the offset object with either an object
     * or a number.
     */
    public offset(o?: number | Offset) {
        if (o == null) { return this.options.offset; }

        const isNum = (n: number | Offset) => typeof n === 'number';
        ['top', 'right', 'bottom', 'left']
            .forEach(isNum(o)
                ? (dim) => this.options.offset[dim] = o as number
                : (dim) => isNum((o as Offset)[dim])
                    ? this.options.offset[dim] = (o as Offset)[dim]
                    : null);
        return this.options.offset;
    }

    /**
     * Set the threshold with a number.
     */
    public threshold(n: number) {
        return n >= 0 && n <= 1
            ? this.options.threshold = n
            : this.options.threshold;
    }

    /**
     * Use a custom test, overriding inViewport, to
     * determine element visibility.
     */
    public test(fn: (element: HTMLElement, options: Options) => boolean) {
        return this.options.test = fn;
    }

    /**
     * Add proxy for test function, set defaults,
     * and return the interface.
     */
    public is(el: HTMLElement) {
        this.options.test(el, this.options);
    }
}
