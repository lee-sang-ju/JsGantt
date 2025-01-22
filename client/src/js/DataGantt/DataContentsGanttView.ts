import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";
import DataGanttArea from "./DataGanttArea";


export default class DataContentsGanttView extends AbstractJsGantt {

    private _dataGanttArea;

    constructor(dataGanttArea: DataGanttArea) {
        super("dataContentsGanttView-", dataGanttArea.element);

        this._dataGanttArea = dataGanttArea;
        this._initThis();
    }

    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-full bg-fuchsia-200 ";
        el.textContent = "DC";
        this.parentElement.append(el);
    }
}