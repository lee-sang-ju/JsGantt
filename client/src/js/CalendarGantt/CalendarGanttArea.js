
import '../../css/styles.css';

import AbstractJsGantt from "../AbstractJsGantt";
import CalendarHeaderGanttView from "./CalendarHeaderGanttView";
import CalendarContentsGanttView from "./CalendarContentsGanttView";
import EndInitViewSizingJsGanttEvent from "../Event/EndInitViewSizingJsGanttEvent";
import EndInitViewSizingCalendarGanttAreaEvent from "../Event/EndInitViewSizingCalendarGanttAreaEvent";


export default class CalendarGanttArea extends AbstractJsGantt {

    #_jsGantt;
    #_calendarHeaderGanttView;
    #_calendarContentsGanttView;


    constructor(jsGantt) {
        super("calendarGantt-", jsGantt.element);

        this.#_jsGantt = jsGantt;
        this._initThis();

        this.#_calendarHeaderGanttView = new CalendarHeaderGanttView(this);
        this.#_calendarContentsGanttView = new CalendarContentsGanttView(this);


        document.addEventListener(EndInitViewSizingJsGanttEvent.name, () => {
            this.#_initViewSizing();
        });
    }

    _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute w-auto min-h-96 bg-blue-200  top-0";
        this.parentElement.append(el);
    }

    #_initViewSizing() {
        const w = this.element.offsetWidth;
        const h = this.element.offsetHeight;
        const hvh = this.#_jsGantt.ganttConfig.ganttHeaderViewHeight;

        this.#_calendarHeaderGanttView.element.style.left = "0px";
        this.#_calendarHeaderGanttView.element.style.top = "0px";
        this.#_calendarHeaderGanttView.element.style.width = w+"px";
        this.#_calendarHeaderGanttView.element.style.height = hvh+"px";

        this.#_calendarContentsGanttView.element.style.left = "0px";
        this.#_calendarContentsGanttView.element.style.top = hvh+"px";
        this.#_calendarContentsGanttView.element.style.width = w+"px";
        this.#_calendarContentsGanttView.element.style.height = (h - hvh)+"px";

        this.element.dispatchEvent(EndInitViewSizingCalendarGanttAreaEvent.event);
    }

    viewResizing() {
        const w = this.element.offsetWidth;
        const h = this.element.offsetHeight;
        const hvh = this.#_jsGantt.ganttConfig.ganttHeaderViewHeight;

        this.#_calendarHeaderGanttView.element.style.width = w+"px";

        this.#_calendarContentsGanttView.element.style.width = w+"px";
    }
}