import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

    static url = 'http://localhost:8090/SSW2010/api/v3.6/products/air/search?jipcc=VAVA';

    constructor(private http: HttpClient) {

    }

    private static createAuthorizationHeader(headers: HttpHeaders) {
        headers.append('Authorization', 'Basic ' + btoa('json_user:json_password'));
    }

    getFlights(from: string, to: string, when: Date): Observable<any> {
        let headers = new HttpHeaders();
        // FlightService.createAuthorizationHeader(headers);
        headers = headers.set('Authorization', 'Basic ' + btoa('json_user:json_password')).set('Content-Type', 'application/json');
        return this
            .http
            .post(FlightService.url, this.getRequest(from, to, when), {headers: headers} );
    }

    private getRequest(from: string, to: string, when: Date): string {
        return `{
	                    "cabinClass": "Economy",
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
