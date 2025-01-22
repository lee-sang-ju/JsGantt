
import ConfigJsGantt from "../Config/ConfigJsGantt";

export default class GanttConfigError extends Error {

    constructor(msg: string) {
        super();
        this.message = msg;
    }



    /**
     * ganttConfig 검증.
     *
     * @param ganttConfig
     */
    public static checkGanttConfig(ganttConfig: ConfigJsGantt) {

        if(!ganttConfig) {
            throw new GanttConfigError("ganttConfig is invalid");
        }

        for (const [key, value] of Object.entries(ganttConfig)) {
            console.log(`${key}: ${value}`);

        }
    }

}