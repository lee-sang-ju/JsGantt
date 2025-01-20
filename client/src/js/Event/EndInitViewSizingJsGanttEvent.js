/**
 *
 *
 *
 */
export default class EndInitViewSizingJsGanttEvent {

    static get name() {
        return "EndInitViewSizingJsGanttEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingJsGanttEvent.name, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}