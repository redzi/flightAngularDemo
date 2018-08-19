
export interface Alternative {

    alternatives: Array<Array<Price>>;
}

export interface Price {

    amount: number;
    currency: string;
}
