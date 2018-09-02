import {Component, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/internal/operators';
import {FlightService} from '../../services/flight.service';
import {Offer} from '../../model/Offer';
import {SearchOptionsService} from '../../services/search-options.service';
import {Search} from '../../model/Search';

@Component({
    selector: 'app-flights',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
    private title: string = 'Search Page';
    private flights: Array<Offer>;
    private error: boolean = false;
    private waiting: boolean = false;
    private noFlights: boolean = false;
    private cabinClasses: Array<String> = [];

    constructor(private flightService: FlightService, private searchOptions: SearchOptionsService) {
    }

    ngOnInit() {
    }

    getFlights(searchParameters: Search): void {
        this.waiting = true;
        this.error = false;
        this.noFlights = false;
        this.flightService.getFlights(searchParameters.from, searchParameters.to, searchParameters.when, searchParameters.cabinClass)
            .pipe(
                map(data => data.unbundledOffers),
                map(data => data[0]),
                map(flights => flights.filter(flight => flight
                    && flight.itineraryPart
                    && flight.itineraryPart[0]
                    && flight.itineraryPart[0].segments
                    && flight.itineraryPart[0].segments[0]
                    && flight.itineraryPart[0].segments[0].departure !== undefined
                    && flight.total.alternatives[0] !== undefined
                    && flight.total.alternatives[0][0].amount !== undefined)),
                map(flights => flights.sort((a, b) =>
                    new Date(a.itineraryPart[0].segments[0].departure) - new Date(b.itineraryPart[0].segments[0].departure)))
            )
            .subscribe(flights => {
                    console.log(flights);
                    this.flights = flights;
                    console.log(this.flights);
                    this.error = false;
                    this.waiting = false;
                    if (flights.length === 0) {
                        this.noFlights = true;
                    }
                    this.cabinClasses = this.flights.map(fligh => fligh.cabinClass).reduce(
                        (cabinClasses, cc) => {
                            if (!cabinClasses.includes(cc)) {
                                cabinClasses.push(cc);
                            }
                            return cabinClasses;
                        }, []);
                },
                err => {
                    this.error = true;
                    this.waiting = false;
                    this.flights = [];
                    console.error('An error from search service!', err);
                });
    }

    alert1(event) {
        alert(JSON.stringify(event));
    }
}
