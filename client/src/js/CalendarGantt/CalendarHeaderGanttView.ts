import AbstractJsGantt from "../AbstractJsGantt";
import CalendarGanttArea from "./CalendarGanttArea";
import EndInitViewSizingJsGanttEvent from "../Event/EndInitViewSizingJsGanttEvent";
import EndInitViewSizingCalendarGanttAreaEvent from "../Event/EndInitViewSizingCalendarGanttAreaEvent";
import CHTimeLine from "./CHTimeLine";
import EndInitViewThisCalendarHeaderGanttViewEvent from "../Event/EndInitViewThisCalendarHeaderGanttViewEvent";

export default class CalendarHeaderGanttView extends AbstractJsGantt {

    private _calendarGanttArea: CalendarGanttArea;
    private _chTimeLines: Array<CHTimeLine> = new Array<CHTimeLine>();

    constructor(calendarGanttArea: CalendarGanttArea) {
        super("calendarHeaderGanttView-", calendarGanttArea.element);

        this._calendarGanttArea = calendarGanttArea;

        this._initThis();

        document.addEventListener(EndInitViewSizingCalendarGanttAreaEvent.name, () => {
            console.debug("-- s - EndInitViewSizingCalendarGanttAreaEvent ------");
            this._initViewThis();
            console.debug("-- e - EndInitViewSizingCalendarGanttAreaEvent ------");
        });
    }


    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "absolute h-24 bg-emerald-300 ";
        this.parentElement.append(el);
    }

    private _initViewThis() {
        const lineMode = this.ganttConfig.calendarViewMode;
        for(let idx = 0; idx < lineMode.length; idx++) {
            const chTimeLine = new CHTimeLine(this, idx);
            this._chTimeLines.push(chTimeLine);
        }
        this.element.dispatchEvent(EndInitViewThisCalendarHeaderGanttViewEvent.event);
    }
}