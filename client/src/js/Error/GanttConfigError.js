import _ from 'lodash';

export default class GanttConfigError extends Error {

    constructor(props) {
        super(props);
    }



    /**
     * ganttConfig 검증.
     *
     * @param ganttConfig
     */
    static checkGanttConfig(ganttConfig) {

        if(!ganttConfig) {
            throw new GanttConfigError("ganttConfig is invalid");
        }

        for (const [key, value] of Object.entries(ganttConfig)) {
            console.log(`${key}: ${value}`);

        }
    }

}