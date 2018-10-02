import Registry from './Registry';
import Options from './model/Options';
export default class InView {
    /**
     * How often and on what events we should check
     * each registry.
     */
    interval: number;
    triggers: string[];
    /**
     * Maintain a hashmap of all registries, a history
     * of selectors to enumerate, and an options object.
     */
    selectors: Selectors;
    options: Options;
    constructor();
}
export interface Selectors {
    [selector: string]: Registry | string[];
    history: string[];
}
