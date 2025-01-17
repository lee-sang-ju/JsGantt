import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";


export default class DataHeaderGanttView extends AbstractJsGantt {

    #_dataGanttArea;

    constructor(dataGanttArea) {
        super("dataHeaderGanttView-", dataGanttArea.element);


        this.#_dataGanttArea = dataGanttArea;


        this._initThis();
    }

    _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-24 bg-teal-200 ";
        el.textContent = "DH";
        this.parentElement.append(el);
    }



}