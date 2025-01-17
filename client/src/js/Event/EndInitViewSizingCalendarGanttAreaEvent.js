/**
 *
 *
 *
 */
export default class EndInitViewSizingCalendarGanttAreaEvent {

    static get name() {
        return "end-init-view-sizing-calendar-gantt-area-event";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingCalendarGanttAreaEvent.name, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}