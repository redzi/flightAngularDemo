import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlightService} from './flight.service';
import {HttpClientModule} from '@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './authentication-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './routing/app.routing';
import {AuthGuard} from './guard/authGuard';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    LoginComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    HttpClientModule,
      ReactiveFormsModule,
      routing
  ],
  providers: [FlightService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
