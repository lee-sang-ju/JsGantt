import AbstractJsGantt from "../AbstractJsGantt";
import CalendarGanttArea from "./CalendarGanttArea";

export default class CalendarContentsGanttView extends AbstractJsGantt {

    #_calendarGanttArea;

    constructor(calendarGanttArea) {
        super("calendarContentsGanttView-", calendarGanttArea.element);


        this.#_calendarGanttArea = calendarGanttArea;


        this._initThis();
    }

    _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-full bg-emerald-200 ";
        el.textContent = "CC";
        this.parentElement.append(el);
    }
}