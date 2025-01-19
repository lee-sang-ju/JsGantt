import AbstractJsGantt from "../AbstractJsGantt";

export default class CHTimeLineItem extends AbstractJsGantt {

    #_chTimeLine;
    #_value;
    #_lineMode;

    constructor(chTimeLine, lineMode, value) {
        super("CHTimeLineItem-", chTimeLine.element);

        this.#_value = value;
        this.#_lineMode = lineMode;
        this.#_chTimeLine = chTimeLine;
        this.#_initThis();
    }

    #_initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "w-4, h-4 absolute";
        el.textContent = " -"+this.#_value;
        this.parentElement.append(el);
    }
}