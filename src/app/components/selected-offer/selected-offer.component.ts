import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../model/Offer';

@Component({
  selector: 'app-selected-offer',
  templateUrl: './selected-offer.component.html',
  styleUrls: ['./selected-offer.component.css']
})
export class SelectedOfferComponent implements OnInit {

  constructor() { }

  @Input()
  selectedOffer: Offer;

  ngOnInit() {
    console.log(this.selectedOffer);
  }

}
