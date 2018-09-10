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

  select(shoppingBasketHashCode: string) {
      return this.http
          .post(this.getUrl(shoppingBasketHashCode), null, {headers: this.authService.getHeaders()});
  }

  getUrl(shoppingBasketHashCode: string) {
    const execution = this.executionService.getExecution();
    return `http://localhost:8090/SSW2010/api/v3.6/products/air?jipcc=VAVA&selectFlights=${shoppingBasketHashCode}&execution=${execution}`;
  }
}
