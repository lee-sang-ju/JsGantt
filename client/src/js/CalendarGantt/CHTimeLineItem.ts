import AbstractJsGantt from "../AbstractJsGantt";
import CHTimeLine from "./CHTimeLine";
import CommonUtils from "../Common/CommonUtils";

export default class CHTimeLineItem extends AbstractJsGantt {

    private _chTimeLine: CHTimeLine;
    private _value: Date;
    private _lineMode: string;

    constructor(chTimeLine: CHTimeLine, lineMode: string, value: Date) {
        super("CHTimeLineItem-", chTimeLine.element);

        this._value = value;
        this._lineMode = lineMode;
        this._chTimeLine = chTimeLine;
        this._initThis();
    }

    private _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "w-4, h-4 bg-lime-200 absolute";

        if(this._lineMode == "Y") {
            el.textContent = this._value.getFullYear().toString();
        } else if(this._lineMode == "Q") {
            const q = this._value.getMonth() / 3;
            el.textContent = this._value.getFullYear() +"-"+ (q+1) + "Q";
        } else if(this._lineMode == "M") {
            const m = this._value.getMonth();
            el.textContent = (m+1) + "M";
        } else if(this._lineMode == "W") {
            const wn = CommonUtils.getWeek(this._value);
            el.textContent = this._value.getFullYear() +"-"+ wn + "W";
        }

        this.parentElement.append(el);
    }
}