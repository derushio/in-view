import Options from './model/Options';
/**
 * - Registry -
 *
 * Maintain a list of elements, a subset which currently pass
 * a given criteria, and fire events when elements move in or out.
 */
export default class Registry {
    options: Options;
    elements: HTMLElement[];
    current: HTMLElement[];
    handlers: Handlers;
    singles: Handlers;
    constructor(elements: HTMLElement[], options: Options);
    /**
     * Check each element in the registry, if an element
     * changes states, fire an event and operate on current.
     */
    check(): this;
    /**
     * Register a handler for event, to be fired
     * for every event.
     */
    on(event: string, handler: Handler): this;
    /**
     * Register a handler for event, to be fired
     * once and removed.
     */
    once(event: string, handler: Handler): this;
    /**
     * Emit event on given element. Used mostly
     * internally, but could be useful for users.
     */
    emit(event: string, element: HTMLElement): this;
}
export declare type Handler = (element: HTMLElement) => any;
export interface Handlers {
    [event: string]: Handler[];
}
