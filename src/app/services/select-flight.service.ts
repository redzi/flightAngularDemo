import { Injectable } from '@angular/core';
import {ExecutionCookieReaderService} from './execution-cookie-reader.service';
import {HttpClient} from '@angular/common/http';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SelectFlightService {

  constructor (private http: HttpClient, private executionService: ExecutionCookieReaderService, private authService: AuthServiceService) {

  }

  select(shoppingBasketHashCode: number) {
      return this.http
          .post(this.getUrl(shoppingBasketHashCode.toString()), null, {headers: this.authService.getHeaders(),
              withCredentials: true, observe: 'response'});
  }

  getUrl(shoppingBasketHashCode: string) {
    const execution = this.executionService.getExecution();
 // return `http://localhost:8090/SSW2010/api/v4.0/products/air?jipcc=VAVA&selectFlights=${shoppingBasketHashCode}&execution=${execution}`;
    return `http://ctovm1824.sgdcelab.sabre.com:8081/SSW2010/api/v4.0/products/air?jipcc=VAVA`
        + `&selectFlights=${shoppingBasketHashCode}&execution=${execution}`;
  }
}
