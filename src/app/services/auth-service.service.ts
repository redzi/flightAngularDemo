import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {
  }

  getHeaders(): HttpHeaders {
      return new HttpHeaders().set('Authorization', 'Basic ' + btoa('json_user:json_password'))
          .set('Content-Type', 'application/json');
  }
}
