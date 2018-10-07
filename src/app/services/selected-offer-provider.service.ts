import { Injectable } from '@angular/core';
import {Offer} from '../model/Offer';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedOfferProviderService {

  private _selectedOffer: Offer;
  private subject: Subject<Offer> = new BehaviorSubject(this._selectedOffer);

  constructor() { }

  get selectedOffer () {
    return this._selectedOffer;
  }

  set selectedOffer (offer: Offer) {
    this.subject.next(offer);
    this._selectedOffer = offer;
  }

  getSelectedOffer(): Observable<Offer> {
    return this.subject.asObservable();
  }
}
