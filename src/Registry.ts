import Options from './model/Options';

/**
 * - Registry -
 *
 * Maintain a list of elements, a subset which currently pass
 * a given criteria, and fire events when elements move in or out.
 */
export default class Registry {
    public options: Options;
    public elements: HTMLElement[];
    public current = [] as HTMLElement[];
    public handlers = { enter: [], exit: [] } as Handlers;
    public singles = { enter: [], exit: [] } as Handlers;

    constructor(elements: HTMLElement[], options: Options) {
        this.options  = options;
        this.elements = elements;
    }

    /**
     * Check each element in the registry, if an element
     * changes states, fire an event and operate on current.
     */
    public check() {
        this.elements.forEach((el) => {
            const passes  = this.options.test(el, this.options);
            const index   = this.current.indexOf(el);
            const current = index > -1;
            const entered = passes && !current;
            const exited  = !passes && current;

            if (entered) {
                this.current.push(el);
                this.emit('enter', el);
            }

            if (exited) {
                this.current.splice(index, 1);
                this.emit('exit', el);
            }
        });
        return this;
    }

    /**
     * Register a handler for event, to be fired
     * for every event.
     */
    public on(event: string, handler: Handler) {
        this.handlers[event].push(handler);
        return this;
    }

    /**
     * Register a handler for event, to be fired
     * once and removed.
     */
    public once(event: string, handler: Handler) {
        this.singles[event].unshift(handler);
        return this;
    }

    /**
     * Emit event on given element. Used mostly
     * internally, but could be useful for users.
     */
    public emit(event: string, element: HTMLElement) {
        while (0 < this.singles[event].length) {
            this.singles[event].pop()!(element);
        }

        let length = this.handlers[event].length;
        while (--length > -1) {
            this.handlers[event][length](element);
        }

        return this;
    }
}

export type Handler = (element: HTMLElement) => any;

export interface Handlers {
    [event: string]: Handler[];
}
