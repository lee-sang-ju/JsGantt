


export default class TimeLineDate {

    #_sdate;
    #_edate;

    constructor(sdate, edate) {
        //console.log("-- s - TimeLineDate.construct ----------");
        if(!(sdate instanceof Date && edate instanceof Date)) {
            throw new TypeError("param is bad type, param type is Date");
        }
        this.#_sdate = new Date(sdate.toJSON());
        this.#_edate = new Date(edate.toJSON());

        // console.log("sdate:", sdate);
        // console.log("edate:", edate);
        // console.log("-- e - TimeLineDate.construct ----------");
    }

    get years() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setFullYear(date.getFullYear() + 1);
        }
        return a;
    }

    get quarters() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setMonth(date.getMonth() + 3);
        }
        return a;
    }

    get months() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setMonth(date.getMonth() + 1);
        }
        return a;
    }

    get weeks() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setDate(date.getDate() + 7);
        }
        return a;
    }

    get dates() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setDate(date.getDate() + 1);
        }
        return a;
    }

    get hours() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setHours(date.getHours() + 1);
        }
        return a;
    }

    get minutes() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setMinutes(date.getMinutes() + 1);
        }
        return a;
    }

    get seconds() {
        const endTime = this.#_edate.getTime();
        const date = new Date(this.#_sdate.toJSON());

        let a = [];
        while(date.getTime() <= endTime) {
            a.push(new Date(date.toJSON()));
            date.setSeconds(date.getSeconds() + 1);
        }
        return a;
    }
}