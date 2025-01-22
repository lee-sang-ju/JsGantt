import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";
import DataGanttArea from "./DataGanttArea";


export default class DataHeaderGanttView extends AbstractJsGantt {

    private _dataGanttArea;

    constructor(dataGanttArea: DataGanttArea) {
        super("dataHeaderGanttView-", dataGanttArea.element);


        this._dataGanttArea = dataGanttArea;


        this._initThis();
    }

    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-24 bg-teal-200 ";
        el.textContent = "DH";
        this.parentElement.append(el);
    }



}