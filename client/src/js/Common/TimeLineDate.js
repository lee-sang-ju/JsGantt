


export default class TimeLineDate {

    #_config;
    construct(config) {

        this.#_config = config;
    }

    get startYear() {
        const date = this.#_config.staticStartDate;
        return date.getFullYear();
    }

    get nextYear() {
        const y = this.year;
        let date = new Date(this.#_date.getTime());
        date.setFullYear(y + 1);
        return date.getFullYear();
    }
}