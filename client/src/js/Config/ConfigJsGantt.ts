
import * as _ from "lodash";

export default class ConfigJsGantt {


    // 간트 데이트 뷰영역 보기.
    public ganttDataVisible : boolean = true;

    // 간트 칼렌다 뷰영역 보기.
    public ganttCalendarVisible : boolean = true;

    // Y:year, Q:quarter, M:month, W:week, D:date, H:hour, m:minute, S:second
    public calendarViewMode : string = "YQM";

    // 헤드 더블클릭시 뷰모드 변경.
    // "YQM" -> "QMW" -> "MWD" -> "WDH" -> "DHm" -> "HmS"
    // "YQ" -> "QM" -> "MW" -> "WD" -> "DH" -> "Hm" -> "mS"
    public changeCalendarViewMode: boolean = true;

    // 간트 헤더 뷰의 높이.
    public ganttHeaderViewHeight : number = 100;

    // 간트 데이트 뷰영역 최소 폭
    public ganttDataViewMinWidth : number = 400;

    // 간트 칼렌다 뷰영역 최소 폭.
    public ganttCalendarViewMinWidth: number = 400;

    public staticStartViewDate : Date = new Date("2020-01-13T03:24:00");
    public staticEndViewDate : Date = new Date("2020-12-13T03:24:00");
    public startViewDate : Date = new Date("2020-01-13T03:24:00");
    public endViewDate : Date = new Date("2020-01-13T03:24:00");



    private static _defaultConfig : ConfigJsGantt = new ConfigJsGantt();

    public static get defaultConfig() {
        return _.clone(ConfigJsGantt._defaultConfig);
    }
}