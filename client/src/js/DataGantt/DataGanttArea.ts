
import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";
import DataHeaderGanttView from "./DataHeaderGanttView";
import DataContentsGanttView from "./DataContentsGanttView";
import EndInitViewSizingJsGanttEvent from "../Event/EndInitViewSizingJsGanttEvent";
import JsGantt from "../JsGantt";


export default class DataGanttArea extends AbstractJsGantt {

    _jsGantt;
    _dataHeaderGanttView;
    _dataContentsGanttView;

    constructor(jsGantt : JsGantt) {
        super("dataGanttArea-", jsGantt.element);

        this._jsGantt = jsGantt;

        this._initThis();

        this._dataHeaderGanttView = new DataHeaderGanttView(this);
        this._dataContentsGanttView = new DataContentsGanttView(this);

        document.addEventListener(EndInitViewSizingJsGanttEvent.name, () => {
            this._initViewSizing();
        });
    }

    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute w-1/3 min-h-96 bg-red-200  top-0 left-0";
        this.parentElement.append(el);
    }

    private _initViewSizing() {
        const w = this.element.offsetWidth;
        const h = this.element.offsetHeight;
        const hvh = this._jsGantt.ganttConfig.ganttHeaderViewHeight;

        this._dataHeaderGanttView.element.style.left = "0px";
        this._dataHeaderGanttView.element.style.top = "0px";
        this._dataHeaderGanttView.element.style.width = w+"px";
        this._dataHeaderGanttView.element.style.height = hvh+"px";


        this._dataContentsGanttView.element.style.left = "0px";
        this._dataContentsGanttView.element.style.top = hvh+"px";
        this._dataContentsGanttView.element.style.width = w+"px";
        this._dataContentsGanttView.element.style.height = (h - hvh)+"px";
    }

    viewResizing() {
        const w = this.element.offsetWidth;
        const h = this.element.offsetHeight;
        const hvh = this._jsGantt.ganttConfig.ganttHeaderViewHeight;

        this._dataHeaderGanttView.element.style.width = w+"px";

        this._dataContentsGanttView.element.style.width = w+"px";
    }

}