import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  @Input()
  flight: any;

  @Output()
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    this.eventEmitter.emit(this.flight);
  }


  ngOnInit() {
  }

}
