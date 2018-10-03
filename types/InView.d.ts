import Registry from './Registry';
import Options from './model/Options';
import IVControl from './IVControl';
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
    constructor(parent?: HTMLElement | Window);
    /**
     * controlを生成
     * @param selector
     */
    control(selector: string | HTMLElement): IVControl;
}
export interface Selectors {
    [selector: string]: Registry | string[];
    history: string[];
}
