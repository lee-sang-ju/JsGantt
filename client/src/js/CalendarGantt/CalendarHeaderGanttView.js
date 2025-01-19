import AbstractJsGantt from "../AbstractJsGantt";
import CalendarGanttArea from "./CalendarGanttArea";
import EndInitViewSizingJsGanttEvent from "../Event/EndInitViewSizingJsGanttEvent";
import EndInitViewSizingCalendarGanttAreaEvent from "../Event/EndInitViewSizingCalendarGanttAreaEvent";
import CHTimeLine from "./CHTimeLine";

export default class CalendarHeaderGanttView extends AbstractJsGantt {

    #_calendarGanttArea;
    #_chTimeLines = [];

    constructor(calendarGanttArea) {
        super("calendarHeaderGanttView-", calendarGanttArea.element);

        this.#_calendarGanttArea = calendarGanttArea;

        this.#_initThis();

        document.addEventListener(EndInitViewSizingCalendarGanttAreaEvent.name, () => {
            console.debug("-- s - EndInitViewSizingCalendarGanttAreaEvent ------");
            this.#_initViewThis();
            console.debug("-- e - EndInitViewSizingCalendarGanttAreaEvent ------");
        });
    }


    #_initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-24 bg-emerald-300 ";
        this.parentElement.append(el);
    }

    #_initViewThis() {

        const lineMode = this.ganttConfig.calendarViewMode;
        for(let idx = 0; idx < lineMode.length; idx++) {
            const chTimeLine = new CHTimeLine(this, idx);
            this.#_chTimeLines.push(chTimeLine);
        }



    }
}