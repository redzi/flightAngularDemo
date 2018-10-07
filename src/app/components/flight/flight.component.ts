import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from '../../model/Offer';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  @Input()
  flight: Offer;

  @Output()
  eventEmitter: EventEmitter<Offer> = new EventEmitter<Offer>();

  onClick() {
    this.eventEmitter.emit(this.flight);
  }


  ngOnInit() {
    const test = true;
  }

}
