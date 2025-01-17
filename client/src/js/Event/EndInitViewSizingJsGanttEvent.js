/**
 *
 *
 *
 */
export default class EndInitViewSizingJsGanttEvent {

    static get name() {
        return "end-init-view-sizing-js-gantt-event";
    }

    static get event() {
        return new CustomEvent(EndInitViewSizingJsGanttEvent.name, {
            bubbles: true,
            detail: "end initViewSizing Event"
        });
    }

}