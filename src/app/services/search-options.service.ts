import { Injectable } from '@angular/core';
import {createSearchOptionsFactory} from '../factories/SearchOptionsFactory';

@Injectable({
  providedIn: 'root', useFactory: () => createSearchOptionsFactory()
})
export class SearchOptionsService {

  constructor(private _from: string, private _to: string, private _when: Date) {
    this._from = 'SYD';
    this._to = 'MEL';
    this._when = new Date();
  }

  reset() {
      this._from = 'SYD';
      this._to = 'MEL';
      this._when = new Date();
  }

    get from(): string {
        return this._from;
    }

    set from(value: string) {
        this._from = value;
    }

    get to(): string {
        return this._to;
    }

    set to(value: string) {
        this._to = value;
    }

    get when(): Date {
        return this._when;
    }

    set when(value: Date) {
        this._when = value;
    }
}
