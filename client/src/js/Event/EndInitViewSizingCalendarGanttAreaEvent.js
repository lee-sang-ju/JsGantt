/**
 *
 *
 *
 */
export default class EndInitViewSizingCalendarGanttAreaEvent {

    static get name() {
        return "EndInitViewSizingCalendarGanttAreaEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingCalendarGanttAreaEvent.name, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}