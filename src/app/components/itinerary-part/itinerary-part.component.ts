import {Component, Input, OnInit} from '@angular/core';
import {ItineraryPart} from '../../model/ItineraryPart';

@Component({
  selector: 'app-itinerary-part',
  templateUrl: './itinerary-part.component.html',
  styleUrls: ['./itinerary-part.component.css']
})
export class ItineraryPartComponent implements OnInit {

  constructor() { }

  @Input()
  itineraryPart: ItineraryPart;

  ngOnInit() {
  }

}
