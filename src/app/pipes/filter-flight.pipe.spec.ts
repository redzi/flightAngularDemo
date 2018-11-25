import {FilterFlightPipe} from './filter-flight.pipe';
import {Flight} from '../model/Flight';

describe('FilterFlightPipe', () => {

    let pipe: FilterFlightPipe;
    const matchingFlight: Flight = {flightNumber: 123, airlineCode: 'VA', operatingAirlineCode: 'VA', cabinClass: 'Economy'} as Flight;
    const flights = [{flightNumber: 234, airlineCode: 'VA', operatingAirlineCode: 'VA', cabinClass: 'Business'} as Flight, matchingFlight];

    beforeEach(() => {
        pipe = new FilterFlightPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return empty when empty argument is used', () => {
        const emptyFlights: Array<Flight> = [];
        const result: Array<Flight> = pipe.transform(emptyFlights, 'Economy');

        expect(result).toBeTruthy();
        expect(result).toEqual(emptyFlights);
    });

    it('should return empty when no flight matches the cabin class', () => {
        const result: Array<Flight> = pipe.transform(flights, 'First');

        expect(result).toBeTruthy();
        expect(result).toEqual([]);
    });

    it('should return filtered flights', () => {
        const result: Array<Flight> = pipe.transform(flights, 'Economy');

        expect(result).toBeTruthy();
        expect(result).toEqual([matchingFlight]);
    });
});
