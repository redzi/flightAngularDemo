import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private subject = new BehaviorSubject<boolean>(false);
  private user: String = 'user';
  private password: String = 'password';
  private isLogin = false;

  constructor() { }

    login(userData): Observable<boolean> {
      if (this.checkLogin()) {
        this.subject.next(true);
      } else {
          if (userData.userName === this.user && userData.userPassword === this.password) {
              this.isLogin = true;
              this.subject.next(true);
          } else {
              this.subject.next(false);
          }
      }
      return this.subject;
    }

    logout(): void {
      this.isLogin = false;
      this.subject.next(false);
    }

    checkLogin(): boolean {
      return this.isLogin;
    }
}
