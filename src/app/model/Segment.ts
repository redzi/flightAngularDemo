import {Flight} from './Flight';


export interface Segment {

    duration: number;
    cabinClass: string;
    equipment: string;
    flight: Flight;
    origin: string;
    destination: string;
    departure: Date;
    arrival: Date;
    bookingClass: string;
}
