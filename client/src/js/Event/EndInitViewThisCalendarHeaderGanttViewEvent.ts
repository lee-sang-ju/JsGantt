/**
 *
 *
 *
 */
export default class EndInitViewThisCalendarHeaderGanttViewEvent {

    static get eventName() {
        return "EndInitViewThisCalendarHeaderGanttViewEvent";
    }

    static get event() {
        return new CustomEvent(EndInitViewThisCalendarHeaderGanttViewEvent.eventName, {
            bubbles: true,
            detail: "end initViewThis Event"
        });
    }

}