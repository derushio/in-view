import { throttle } from 'lodash';

import Registry from './Registry';
import Viewport from './Viewport';
import Options from './model/Options';

export default class InView {
    /**
     * How often and on what events we should check
     * each registry.
     */
    public interval = 100;
    public triggers = [ 'scroll', 'resize', 'load' ];

    /**
     * Maintain a hashmap of all registries, a history
     * of selectors to enumerate, and an options object.
     */
    public selectors = { history: [] as string[] } as Selectors;
    public options   = { offset: {}, threshold: 0, test: Viewport } as Options;

    public constructor() {
        /**
         * Check each registry from selector history,
         * throttled to interval.
         */
        const check = throttle(() => {
            this.selectors.history.forEach((selector) => {
                (this.selectors[selector] as Registry).check();
            });
        }, this.interval);

        /**
         * For each trigger event on window, add a listener
         * which checks each registry.
         */
        this.triggers.forEach((event) =>
            addEventListener(event, check));

        /**
         * If supported, use MutationObserver to watch the
         * DOM and run checks on mutation.
         */
        addEventListener('DOMContentLoaded', () => {
            new MutationObserver(check)
                .observe(document.body, { attributes: true, childList: true, subtree: true });
        });
    }
}

export interface Selectors {
    [selector: string]: Registry | string[];
    history: string[];
}
