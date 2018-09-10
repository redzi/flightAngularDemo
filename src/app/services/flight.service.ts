import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

    private static url = 'http://localhost:8090/SSW2010/api/v3.6/products/air/search?jipcc=VAVA';
    // static url = 'http://ctovm1824.sgdcelab.sabre.com:8081/SSW2010/api/v3.6/products/air/search?jipcc=VAVA';

    constructor(private http: HttpClient, private authService: AuthServiceService) {

    }

    getFlights(from: string, to: string, when: Date, cabinClass: string): Observable<any> {
        return this
            .http
            .post(FlightService.url, this.getRequest(from, to, when, cabinClass),
                {headers: this.authService.getHeaders(), observe: 'response'} );
    }

    private getRequest(from: string, to: string, when: Date, cabinClass: string): string {
        return `{
	                    ${cabinClass ? `"cabinClass" : "${cabinClass}",` : ``}
	                    "awardBooking": "false",
	                    "promoCodes": [],
	                    "pointOfSale": null,
	                    "searchType": "BRANDED",
	                    "itineraryParts": [{
			                "from": {
				                "useNearbyLocations": false,
				                "code": "${from}"
			                },
			                "to": {
				                "useNearbyLocations": false,
				                "code": "${to}"
			                },
			                "when": {
				                "date": "${when}"
			                }
		                }],
		                "passengers": {
		                    "ADT": 1
	                    }
                    }`;
    }
}
