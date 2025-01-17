import '../css/styles.css';

export default class AbstractJsGantt {

    #_id;
    #_parentElement;
    static #_ganttConfig;

    constructor(idPrefix, parentElement) {
        this.#_id = idPrefix + this.random;
        this.#_parentElement = parentElement;
    }

    set ganttConfig(config) {
        if(AbstractJsGantt.#_ganttConfig) {
            throw new GanttError("already gantt config set");
        } else {
            AbstractJsGantt.#_ganttConfig = config;
        }
    }

    get ganttConfig() {
        return AbstractJsGantt.#_ganttConfig;
    }

    get random() {
        const n = Math.random();
        console.log("n:"+n);
        const s = n * 10000000000000000;
        console.log("s:"+s);
        return s;
    }

    get id() {
        return this.#_id;
    }

    get element() {
        return document.getElementById(this.id);
    }

    get parentElement() {
        return this.#_parentElement;
    }
}