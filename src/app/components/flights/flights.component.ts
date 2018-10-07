import {Component, OnInit} from '@angular/core';
import {map, tap} from 'rxjs/internal/operators';
import {FlightService} from '../../services/flight.service';
import {Offer} from '../../model/Offer';
import {SearchOptionsService} from '../../services/search-options.service';
import {Search} from '../../model/Search';
import {ExecutionCookieReaderService} from '../../services/execution-cookie-reader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectedOfferProviderService} from '../../services/selected-offer-provider.service';

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

    constructor(private flightService: FlightService, private searchOptions: SearchOptionsService,
                private executionService: ExecutionCookieReaderService, private router: Router,
                private route: ActivatedRoute, private selectedOfferProvider: SelectedOfferProviderService) {
    }

    ngOnInit() {
    }

    getFlights(searchParameters: Search): void {
        this.waiting = true;
        this.error = false;
        this.noFlights = false;
        this.flightService.getFlights(searchParameters.from, searchParameters.to, searchParameters.when, searchParameters.cabinClass)
            .pipe(
                tap(data => console.log(data)),
                tap(data => console.log(data.headers.get('Execution'))),
                tap(data => {
                    this.executionService.setHeaders(data.headers);
                }),
                tap(data => {
                    const jsession = document.cookie;
                }),
                map(data => data.body.unbundledOffers),
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
                    (new Date(a.itineraryPart[0].segments[0].departure)).getTime()
                    - (new Date(b.itineraryPart[0].segments[0].departure)).getTime()))
            )
            .subscribe(flights => {
                    console.log(flights);
                    this.flights = flights;
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

    selectFlight(event: Offer) {
        console.log(this.executionService.getExecution());
        this.selectedOfferProvider.selectedOffer = event;
        this.router.navigate(['select']);
    }
}
