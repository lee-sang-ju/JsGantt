
import _ from 'lodash';
import './css/styles.css';

import JsGantt from "./js/JsGantt";
import GanttConfigError from "./js/Error/GanttConfigError";

function component() {
    const divJsGantt = document.getElementById("jsGantt");
    divJsGantt.className +="relative";

    const jsGanttConfig = {
        ganttDataWidth: 400,
        ganttHeaderViewHeight: 100,
        calendarViewMode: "YQM",
        changeCalendarViewMode: true,
        staticStartViewDate: new Date("2020-01-13T03:24:00"),
        staticEndViewDate: new Date("2020-12-31T03:24:00"),
        startViewDate: new Date("2020-01-13T03:24:00"),
        endViewDate: new Date("2020-12-31T03:24:00")
    }

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