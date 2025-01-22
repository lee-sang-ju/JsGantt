/**
 *
 *
 *
 */
export default class EndInitViewSizingCalendarGanttAreaEvent {

    public static get eventName() : string {
        return "EndInitViewSizingCalendarGanttAreaEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingCalendarGanttAreaEvent.eventName, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}