import './css/styles.css';

import JsGantt from "./js/JsGantt";
import GanttConfigError from "./js/Error/GanttConfigError";
import ConfigJsGantt from "./js/Config/ConfigJsGantt";

function component() {
    const divJsGantt = document.getElementById("jsGantt");
    divJsGantt.className +="relative";

    const jsGanttConfig = ConfigJsGantt.defaultConfig;

    try {
        GanttConfigError.checkGanttConfig(jsGanttConfig);
    } catch (error) {
        if(error instanceof GanttConfigError) {
            console.error(error.message);
        }
    }
    const jsGantt = new JsGantt(jsGanttConfig, divJsGantt);

}
component();