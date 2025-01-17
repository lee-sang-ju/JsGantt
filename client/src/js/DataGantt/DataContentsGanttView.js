import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";


export default class DataContentsGanttView extends AbstractJsGantt {

    #_dataGanttArea;

    constructor(dataGanttArea) {
        super("dataContentsGanttView-", dataGanttArea.element);

        this.#_dataGanttArea = dataGanttArea;
        this._initThis();
    }

    _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-full bg-fuchsia-200 ";
        el.textContent = "DC";
        this.parentElement.append(el);
    }
}