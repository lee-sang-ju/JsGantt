


export default class ConfigJsGantt {

    static #_defaultConfig = {

        // 간트 데이트 뷰영역 보기.
        ganttDataVisible: true,

        // 간트 칼렌다 뷰영역 보기.
        ganttCalendarVisible: true,

        // Y:year, Q:quarter, M:month, W:week, D:date, H:hour, m:minute, S:second
        calendarViewMode: "YQM",

        // 헤드 더블클릭시 뷰모드 변경.
        // "YQM" -> "QMW" -> "MWD" -> "WDH" -> "DHm" -> "HmS"
        // "YQ" -> "QM" -> "MW" -> "WD" -> "DH" -> "Hm" -> "mS"
        changeCalendarViewMode: true,

        // 간트 헤더 뷰의 높이.
        ganttHeaderViewHeight: 100,

        // 간트 데이트 뷰영역 최소 폭
        ganttDataViewMinWidth: 400,

        // 간트 칼렌다 뷰영역 최소 폭.
        ganttCalendarViewMinWidth: 400,


        startViewDate: new Date("2020-01-13T03:24:00")

    }

    static get defaultConfig() {
        return _.clone(ConfigJsGantt.#_defaultConfig);
    }



}