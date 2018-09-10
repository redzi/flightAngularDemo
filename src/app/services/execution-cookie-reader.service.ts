import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutionCookieReaderService {

  private static executionCookieName: string = 'Execution';
  private _headers: HttpHeaders;

    constructor() { }

  setHeaders(headers: HttpHeaders) {
    this._headers = headers;
  }

  getExecution(): string {
      if (this._headers === undefined || this._headers.get(ExecutionCookieReaderService.executionCookieName) === undefined) {
        throw Error('Execution has not been set!');
      }
      return this._headers.get(ExecutionCookieReaderService.executionCookieName);
  }
}
