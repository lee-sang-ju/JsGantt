import AbstractJsGantt from "../AbstractJsGantt";
import CHTimeLineItem from "./CHTimeLineItem";

export default class CHTimeLine extends AbstractJsGantt {

    #_lineMode;
    #_lineNumber;
    #_chTimeLineItems;
    #_calendarHeaderGanttView;

    constructor(calendarHeaderGanttView, lineMode, lineNumber) {
        super("CHTimeLine-", calendarHeaderGanttView.element);

        this.#_lineMode = this.ganttConfig.calendarViewMode[this.#_lineNumber-1];
        this.#_lineNumber = lineNumber;

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

        const chTimeLineItem1 = new CHTimeLineItem(this, this.#_lineMode, 2020);
        const chTimeLineItem2 = new CHTimeLineItem(this, this.#_lineMode, 2021);
        const chTimeLineItem3 = new CHTimeLineItem(this, this.#_lineMode, 2022);
        this.#_chTimeLineItems = [chTimeLineItem1, chTimeLineItem2, chTimeLineItem3];


    }
}