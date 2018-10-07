import { Component, OnInit } from '@angular/core';
import {SelectFlightService} from '../../services/select-flight.service';
import {ActivatedRoute} from '@angular/router';
import {Offer} from '../../model/Offer';
import {SelectedOfferProviderService} from '../../services/selected-offer-provider.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private offer: Offer;
  private waiting: boolean = false;
  private error: boolean = false;

  constructor(private selectService: SelectFlightService,
              private selectedOfferProvider: SelectedOfferProviderService) { }

  ngOnInit() {
    this.selectedOfferProvider.getSelectedOffer().subscribe(offer => {
      this.offer = offer;
      this.waiting = true;
      this.error = false;
      this.selectService.select(offer.shoppingBasketHashCode)
          .subscribe(select => {
              console.log(select);
              this.waiting = false;
          },
              error => {
              this.error = true;
              });
    });
  }

  getExecution() {
    this.selectService.getUrl('11111111');
  }
}
