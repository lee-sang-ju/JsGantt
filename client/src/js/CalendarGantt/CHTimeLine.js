import AbstractJsGantt from "../AbstractJsGantt";
import CHTimeLineItem from "./CHTimeLineItem";
import TimeLineDate from "../Common/TimeLineDate";

export default class CHTimeLine extends AbstractJsGantt {

    #_lineMode;
    #_lineNumber;
    #_chTimeLineItems = [];
    #_calendarHeaderGanttView;

    #_timeLineDate;

    constructor(calendarHeaderGanttView, lineNumber) {
        super("CHTimeLine-", calendarHeaderGanttView.element);

        this.#_lineNumber = lineNumber;

        console.dir(this.ganttConfig);

        this.#_lineMode = this.ganttConfig.calendarViewMode.at(this.#_lineNumber-1);
        console.log("_lineMode:", this.#_lineMode);

        const sYear = this.ganttConfig.staticStartViewDate.getFullYear();
        console.log("sYear:"+sYear);
        const eYear = this.ganttConfig.staticEndViewDate.getFullYear();
        console.log("eYear:"+eYear);

        this.#_timeLineDate = new TimeLineDate(this.ganttConfig.staticStartViewDate,
                                                this.ganttConfig.staticEndViewDate);

        console.log("-- s - this.#_timeLineDate  -------------------------------")

        this.#_calendarHeaderGanttView = calendarHeaderGanttView;
        this.#_initThis();


        this.#_initViewThis();
    }

    #_initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "h-7 bg-slate-200 relative";
        this.parentElement.append(el);
    }

    #_initViewThis() {

        console.log("calendarViewMode:", this.ganttConfig.calendarViewMode);
        console.log("LineMode:"+this.#_lineMode);



        if(this.#_lineMode === "Y") {

            const startYear = this.#_timeLineDate.startYear;
            const endYear = this.#_timeLineDate.endYear;

            for(let year = startYear; year <= endYear; year++) {
                const chTimeLineItem = new CHTimeLineItem(this, this.#_lineMode, year);
                this.#_chTimeLineItems.push(chTimeLineItem);
            }
        }
    }
}