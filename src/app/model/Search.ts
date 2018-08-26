
export class Search {
    from: string;
    to: string;
    when: Date;

    constructor(from: string, to: string, when: Date) {
        this.from = from;
        this.to = to;
        this.when = when;
    }
}
