/**
 *
 *
 *
 */
export default class EndInitViewThisCalendarHeaderGanttViewEvent {

    static get name() {
        return "EndInitViewThisCalendarHeaderGanttViewEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewThisCalendarHeaderGanttViewEvent.name, {
            bubbles: true,
            detail: "end initViewThis Event"
        });
    }

}