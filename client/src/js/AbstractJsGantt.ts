import '../css/styles.css';
import GanttError from "./Error/GanttError";
import ConfigJsGantt from "./Config/ConfigJsGantt";

export default class AbstractJsGantt {

    private _id: string;
    private _parentElement: HTMLElement;
    private static _ganttConfig: ConfigJsGantt;

    constructor(idPrefix: string, parentElement: HTMLElement) {
        this._id = idPrefix + this.random;
        this._parentElement = parentElement;
    }

    public set ganttConfig(config : ConfigJsGantt) {
        if(AbstractJsGantt._ganttConfig) {
            throw new GanttError("already gantt config set");
        } else {
            AbstractJsGantt._ganttConfig = config;
        }
    }

    public get ganttConfig() {
        return AbstractJsGantt._ganttConfig;
    }

    public get random(): string {
        return Math.floor(Math.random() * 99999999999999999999).toFixed(0);
    }

    public get id() : string {
        return this._id;
    }

    public get element() : HTMLElement {
        return document.getElementById(this.id);
    }

    public get parentElement() : HTMLElement {
        return this._parentElement;
    }
}