import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './components/app.component';
import {FlightComponent} from './components/flight/flight.component';
import {LoginComponent} from './components/login/login.component';
import {FlightsComponent} from './components/flights/flights.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './routing/app.routing';
import {FlightService} from './services/flight.service';
import {AuthenticationService} from './services/authentication-service.service';
import {AuthGuard} from './guard/authGuard';

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
