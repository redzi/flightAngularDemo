import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

    body;
    url = 'http://localhost:8090/SSW2010/api/v3.6/products/air/search?jipcc=VAVA';
    requestString = `{
	                    "cabinClass": "Economy",
	                    "awardBooking": "false",
	                    "promoCodes": [],
	                    "pointOfSale": null,
	                    "searchType": "BRANDED",
	                    "itineraryParts": [{
			                "from": {
				                "useNearbyLocations": false,
				                "code": "SYD"
			                },
			                "to": {
				                "useNearbyLocations": false,
				                "code": "PER"
			                },
			                "when": {
				                "date": "2018-09-01"
			                }
		                }],
		                "passengers": {
		                    "ADT": 1
	                    }
                    }`;

    constructor(private http: HttpClient) {
        this.body = JSON.parse(this.requestString);
    }

    static createAuthorizationHeader(headers: HttpHeaders) {
        headers.append('Authorization', 'Basic ' + btoa('json_user:json_password'));
    }

    getFlights(): Observable<any> {
        let headers = new HttpHeaders();
        // FlightService.createAuthorizationHeader(headers);
        headers = headers.set('Authorization', 'Basic ' + btoa('json_user:json_password')).set('Content-Type', 'application/json');
        return this
            .http
            .post(this.url, this.body, {headers: headers} );
    }
}
