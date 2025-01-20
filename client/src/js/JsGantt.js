import '../css/styles.css';

import AbstractJsGantt from "./AbstractJsGantt";
import DataGanttArea from "./DataGantt/DataGanttArea";
import CalendarGanttArea from "./CalendarGantt/CalendarGanttArea";
import DividerGantt from "./DividerGantt";
import EndInitViewSizingJsGanttEvent from "./Event/EndInitViewSizingJsGanttEvent";
import CalendarHeaderGanttView from "./CalendarGantt/CalendarHeaderGanttView";


export default class JsGantt extends AbstractJsGantt {

    #_dataGanttArea;
    #_dividerGantt;
    #_calendarGanttArea;

    constructor(jsGanttConfig, parentElement) {
        if(typeof parentElement != "object") {
            throw new TypeError("param calendarHeaderGanttView type is bad");
        }
        if(typeof parentElement != "object") {
            throw new TypeError("param parentElement type is bad");
        }
        super("jsGantt-", parentElement);

        super.ganttConfig = jsGanttConfig;

        this.#_initThis();

        this.#_dataGanttArea = new DataGanttArea(this);
        this.#_dividerGantt = new DividerGantt(this);
        this.#_calendarGanttArea = new CalendarGanttArea(this);

        this.initViewSizing();
    }

    #_initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "static w-full h-96 bg-red-200";
        this.parentElement.append(el);
    }


    initViewSizing() {
        const w = this.element.offsetWidth;
        const w1 = this.#_dataGanttArea.element.offsetWidth;
        const w2 = this.#_dividerGantt.element.offsetWidth;

        if(this.ganttConfig.ganttDataViewMinWidth) {
            this.#_dataGanttArea.element.style.width = this.ganttConfig.ganttDataViewMinWidth;
        }

        console.debug(" w:"+w);
        console.debug(" w1:"+w1);
        console.debug(" w2:"+w2);

        // 데이트영역 보기
        if(this.ganttConfig.ganttDataVisible) {

            this.#_dataGanttArea.element.hidden = false;

            if(this.ganttConfig.ganttCalendarVisible) {

                this.#_dividerGantt.element.hidden = false;
                this.#_calendarGanttArea.element.hidden = false;

                this.#_dividerGantt.element.style.left = w1+"px";
                this.#_calendarGanttArea.element.style.left = (w1 + w2)+"px";
                this.#_calendarGanttArea.element.style.width = (w - ( w1 + w2 ))+"px";

                this.#_dividerGantt.element.style.zIndex = "2";

            } else {

                this.#_dividerGantt.element.hidden = true;
                this.#_calendarGanttArea.element.hidden = true;


                this.#_dataGanttArea.element.style.left = "0px";
                this.#_dataGanttArea.element.style.width = w+"px";
            }
        } else {

            this.#_dataGanttArea.element.hidden = true;

            if(this.ganttConfig.ganttCalendarVisible) {

                this.#_calendarGanttArea.element.style.left = "0px";
                this.#_calendarGanttArea.element.style.width = w+"px";

            } else {
                this.#_dataGanttArea.element.hidden = false;
                this.#_dividerGantt.element.hidden = false;
                this.#_calendarGanttArea.element.hidden = false;

                this.#_dividerGantt.element.style.left = w1+"px";
                this.#_calendarGanttArea.element.style.left = (w1 + w2)+"px";
                this.#_calendarGanttArea.element.style.width = (w - ( w1 + w2 ))+"px";

                this.#_dividerGantt.element.style.zIndex = "2";
            }
        }

        this.element.dispatchEvent(EndInitViewSizingJsGanttEvent.event);
    }

    viewResizing() {
        const w = this.element.offsetWidth;
        const w1 = this.#_dividerGantt.element.offsetLeft;
        const w2 = this.#_dividerGantt.element.offsetWidth;

        this.#_dataGanttArea.element.style.width = w1+"px";

        this.#_calendarGanttArea.element.style.left = (w1 + w2)+"px";
        this.#_calendarGanttArea.element.style.width = (w - ( w1 + w2 ))+"px";

        this.#_dataGanttArea.viewResizing();
        this.#_calendarGanttArea.viewResizing();
    }
}