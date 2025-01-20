import AbstractJsGantt from "../AbstractJsGantt";
import CHTimeLine from "./CHTimeLine";
import CommonUtils from "../Common/CommonUtils";

export default class CHTimeLineItem extends AbstractJsGantt {

    #_chTimeLine;
    #_value;
    #_lineMode;

    constructor(chTimeLine, lineMode, value) {
        if(!(chTimeLine instanceof CHTimeLine)) {
            throw new TypeError("param chTimeLine type is bad");
        }
        if(typeof lineMode != "string") {
            throw new TypeError("param lineMode type is bad");
        }
        if(!(value instanceof Date)) {
            throw new TypeError("param value type is bad");
        }
        super("CHTimeLineItem-", chTimeLine.element);

        this.#_value = value;
        this.#_lineMode = lineMode;
        this.#_chTimeLine = chTimeLine;
        this.#_initThis();
    }

    #_initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "w-4, h-4 bg-lime-200 absolute";

        if(this.#_lineMode == "Y") {
            el.textContent = this.#_value.getFullYear();
        } else if(this.#_lineMode == "Q") {
            const q = this.#_value.getMonth() / 3;
            el.textContent = this.#_value.getFullYear() +"-"+ (q+1) + "Q";
        } else if(this.#_lineMode == "M") {
            const m = this.#_value.getMonth();
            el.textContent = (m+1) + "M";
        } else if(this.#_lineMode == "W") {
            const wn = CommonUtils.getWeek(this.#_value);
            el.textContent = this.#_value.getFullYear() +"-"+ wn + "W";
        }

        this.parentElement.append(el);
    }
}