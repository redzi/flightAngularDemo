import {ItineraryPart} from './ItineraryPart';
import {Price} from './Price';


export interface Offer {

    shoppingBasketHashCode: number;
    brandId: string;
    soldout: boolean;
    itineraryPart: Array<ItineraryPart>;
    cabinClass: string;
    total: Price;

}

