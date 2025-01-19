


export default class TimeLineDate {

    #_sdate;
    #_edate;

    construct(sdate, edate) {
        console.log("-- s - TimeLineDate.construct ----------");
        this.#_sdate = new Date(sdate.getTime());
        this.#_edate = new Date(edate.getTime());

        console.log("sdate:", sdate);
        console.log("edate:", edate);
        console.log("-- e - TimeLineDate.construct ----------");
    }

    get startYear() {
        return this.#_sdate.getFullYear();
    }

    get endYear() {
        return this.#_edate.getFullYear();
    }
}