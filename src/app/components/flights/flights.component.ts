import {Component, Input, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/internal/operators';
import {FlightService} from '../../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
    title = 'kuku';
    data;
    flights;
    error = false;

    constructor (private flightService: FlightService) {  }

    ngOnInit() {
    }

    getFlights () {
        this.flightService.getFlights()
            .pipe(
                map(data => data.unbundledOffers),
                map(data => data[0]),
                filter(data => {
                    let entries = Object.entries(data[0].itineraryPart[0].segments[0]);
                    entries = entries.length > 0 ? entries : [['empty', '1']];
                    return entries.some(f => f[0] === 'departure');
                }))
            .subscribe( data => {
                    console.log(data);
                    this.flights = data;
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
