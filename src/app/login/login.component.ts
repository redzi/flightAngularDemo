import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user = '';
    password = '';
    isFailedLogIn = false;

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    isLogin(): boolean {
        return this.authService.checkLogin();
    }

    login(): void {
      const userName = this.user;
      const userPassword = this.password;
        this.authService.login({userName, userPassword})
            .subscribe(
                data => {
                    if (data) {
                        setTimeout(() => {
                            this.isFailedLogIn = false;
                            this.router.navigate(['/']);
                        }, 1000);
                    } else {
                        this.isFailedLogIn = true;
                    }
                },
                error => {
                    console.log(error);
                });
    }
}
