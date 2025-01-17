import '../css/styles.css';

import AbstractJsGantt from "./AbstractJsGantt";


export default class DividerGantt extends AbstractJsGantt {

    #_jsGantt;
    #_pos1 = 0;
    #_pos2 = 0;
    #_pos3 = 0;
    #_pos4 = 0;

    constructor(jsGantt) {
        super("dividerGantt-", jsGantt.element);

        this.#_jsGantt = jsGantt;

        this._initThis();
    }

    _initThis() {
        const el = document.createElement("div");
        el.id = this.id;
        el.className = "w-1.5 min-h-96 bg-lime-900 absolute top-0";
        el.onmousedown = (e) => { this.#_onMouseDown(e);};
        this.parentElement.append(el);
    }

    #_onMouseDown(e) {
        console.debug("-- s - #_onMouseDown ---------------");
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        this.#_pos3 = e.clientX;
        this.#_pos4 = e.clientY;
        console.debug("clientX:", e.clientX, " clientY:", e.clientY);
        console.debug("this.element.offsetTop:", this.element.offsetTop);
        document.onmouseup = () => {
            console.debug("-- s - document.onmouseup ---------------");
            document.onmouseup = null;
            document.onmousemove = null;
            console.debug("-- e - document.onmouseup ---------------");
        };
        document.onmousemove = (e) => { this._onMouseMove(e); }
        console.debug("-- e - #_onMouseDown ---------------");
    }

    _onMouseMove(e) {
        console.debug("-- s - _onMouseMove ---------------");
        e = e || window.event;
        e.preventDefault();
        this.element.style.top = "0px";
        console.debug("clientX:", e.clientX, "clientY:", e.clientY);
        // calculate the new cursor position:
        this.#_pos1 = this.#_pos3 - e.clientX;
        this.#_pos2 = this.#_pos4 - e.clientY;
        this.#_pos3 = e.clientX;
        this.#_pos4 = e.clientY;

        // set the element's new position:
        const left = this.element.offsetLeft - this.#_pos1;
        console.debug(" left:", left);

        const w = this.#_jsGantt.element.offsetWidth;
        const w1 = this.element.offsetWidth;

        const r = w - w1;

        if(0 <= left) {
            if(left <= r) {
                this.element.style.left = left+"px";
            } else {
                this.element.style.left = r+"px";
            }
        } else {
            this.element.style.left = "0px";
        }

        this.#_jsGantt.viewResizing();
        console.debug("-- e - _onMouseMove ---------------");
    }

}