import {Component, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/internal/operators';
import {FlightService} from '../../services/flight.service';
import {Offer} from '../../model/Offer';

@Component({
    selector: 'app-flights',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
    private title: string = 'kuku';
    private flights: Array<Offer>;
    private error: boolean = false;

    constructor(private flightService: FlightService) {
    }

    ngOnInit() {
    }

    getFlights(): void {
        this.flightService.getFlights()
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
                },
                err => {
                    this.error = true;
                    console.error('oops, an error!', err);
                });
    }

    alert1(event) {
        alert(JSON.stringify(event));
    }
}
