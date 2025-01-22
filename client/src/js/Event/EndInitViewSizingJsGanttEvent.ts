/**
 *
 *
 *
 */
export default class EndInitViewSizingJsGanttEvent {

    static get eventName() {
        return "EndInitViewSizingJsGanttEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingJsGanttEvent.eventName, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}