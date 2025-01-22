import AbstractJsGantt from "../AbstractJsGantt";
import CHTimeLineItem from "./CHTimeLineItem";
import TimeLineDate from "../Common/TimeLineDate";
import CalendarHeaderGanttView from "./CalendarHeaderGanttView";
import EndInitViewSizingCalendarGanttAreaEvent from "../Event/EndInitViewSizingCalendarGanttAreaEvent";
import EndInitViewThisCalendarHeaderGanttViewEvent from "../Event/EndInitViewThisCalendarHeaderGanttViewEvent";

export default class CHTimeLine extends AbstractJsGantt {

    private _lineMode: string;
    private _lineNumber: number;
    private _chTimeLineItems: Array<CHTimeLineItem>;
    private _calendarHeaderGanttView: CalendarHeaderGanttView;

    private _timeLineDate: TimeLineDate;

    constructor(calendarHeaderGanttView: CalendarHeaderGanttView, lineNumber: number) {
        if(!(calendarHeaderGanttView instanceof CalendarHeaderGanttView)) {
            throw new TypeError("param calendarHeaderGanttView type is bad");
        }
        if(typeof lineNumber != "number") {
            throw new TypeError("param lineNumber type is bad");
        }
        super("CHTimeLine-", calendarHeaderGanttView.element);

        this._lineNumber = lineNumber;
        this._lineMode = this.ganttConfig.calendarViewMode.at(this._lineNumber);

        this._timeLineDate = new TimeLineDate(this.ganttConfig.staticStartViewDate, this.ganttConfig.staticEndViewDate);
        this._chTimeLineItems = [];

        console.debug("calendarViewMode:", this.ganttConfig.calendarViewMode, " _lineMode:", this._lineMode, " _lineNumber:", this._lineNumber);

        this._calendarHeaderGanttView = calendarHeaderGanttView;
        this._initThis();

        document.addEventListener(EndInitViewThisCalendarHeaderGanttViewEvent.name, () => {
            console.debug("-- s - EndInitViewThisCalendarHeaderGanttViewEvent ------");
            this._initViewThis();
            console.debug("-- e - EndInitViewThisCalendarHeaderGanttViewEvent ------");
        });
    }

    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "h-7 bg-amber-200 relative";
        this.parentElement.append(el);

        console.debug("calendarViewMode:", this.ganttConfig.calendarViewMode);
        console.debug("LineMode:"+this._lineMode);

        if(this._lineMode === "Y") {
            this._timeLineDate.years.forEach((v) => {
                const chTimeLineItem = new CHTimeLineItem(this, this._lineMode, v);
                this._chTimeLineItems.push(chTimeLineItem);
            });
        } else if(this._lineMode === "Q") {
            this._timeLineDate.quarters.forEach((q) => {
                const chTimeLineItem = new CHTimeLineItem(this, this._lineMode, q);
                this._chTimeLineItems.push(chTimeLineItem);
            });
        } else if(this._lineMode === "M") {
            this._timeLineDate.months.forEach((v) => {
                const chTimeLineItem = new CHTimeLineItem(this, this._lineMode, v);
                this._chTimeLineItems.push(chTimeLineItem);
            });
        }
        else if(this._lineMode === "W") {
            this._timeLineDate.weeks.forEach((v) => {
                const chTimeLineItem = new CHTimeLineItem(this, this._lineMode, v);
                this._chTimeLineItems.push(chTimeLineItem);
            });
        }
        else if(this._lineMode === "D") {
            this._timeLineDate.dates.forEach((v) => {
                const chTimeLineItem = new CHTimeLineItem(this, this._lineMode, v);
                this._chTimeLineItems.push(chTimeLineItem);
            });
        }
        else if(this._lineMode === "H") this._initThisLineModeH();
        else if(this._lineMode === "m") this._initThisLineModem();
        else if(this._lineMode === "S") this._initThisLineModeS();
    }


    private _initThisLineModeH() {

    }

    private _initThisLineModem() {

    }

    private _initThisLineModeS() {

    }

    private _initViewThis() {

        const count = this._chTimeLineItems.length;

        const w = this.element.offsetWidth / count;

        this._chTimeLineItems.forEach((chTimeLineItem, idx) => {

            chTimeLineItem.element.style.width = w+"px";
            chTimeLineItem.element.style.left = (w * idx)+"px";

        });

    }
}