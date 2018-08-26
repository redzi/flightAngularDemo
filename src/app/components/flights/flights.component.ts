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
    private title: string = 'kuku';
    private flights: Array<Offer>;
    private error: boolean = false;
    private waiting: boolean = false;

    constructor(private flightService: FlightService, private searchOptions: SearchOptionsService) {
    }

    ngOnInit() {
    }

    getFlights(searchParameters: Search): void {
        this.waiting = true;
        this.flightService.getFlights(searchParameters.from, searchParameters.to, searchParameters.when)
            .pipe(
                map(data => data.unbundledOffers),
                map(data => data[0]),
                map(flights => flights.filter(flight => flight
                    && flight.itineraryPart
                    && flight.itineraryPart[0]
                    && flight.itineraryPart[0].segments
                    && flight.itineraryPart[0].segments[0]
                    && flight.itineraryPart[0].segments[0].departure !== undefined)),
                map(flights => flights.sort((a, b) =>
                    a.total.alternatives[0][0].amount.toFixed(2) - b.total.alternatives[0][0].amount.toFixed(2)))
            )
            .subscribe(flights => {
                    console.log(flights);
                    this.flights = flights;
                    console.log(this.flights);
                    this.error = false;
                    this.waiting = false;
                },
                err => {
                    this.error = true;
                    this.waiting = false;
                    console.error('oops, an error!', err);
                });
    }

    alert1(event) {
        alert(JSON.stringify(event));
    }
}
