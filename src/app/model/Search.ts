
export class Search {
    from: string;
    to: string;
    when: Date;
    cabinClass: string;

    constructor(from: string, to: string, when: Date, cabinClass: string) {
        this.from = from;
        this.to = to;
        this.when = when;
        this.cabinClass = cabinClass;
    }
}
