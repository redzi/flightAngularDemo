import { Pipe, PipeTransform } from '@angular/core';
import {Flight} from '../model/Flight';

@Pipe({
  name: 'filterFlight'
})
export class FilterFlightPipe implements PipeTransform {

  transform(flights: Array<Flight>, cabinClass: string): Array<Flight> {
    return flights.filter(flight => flight.cabinClass === cabinClass);
  }

}
