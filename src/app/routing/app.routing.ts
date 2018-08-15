import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../guard/authGuard';
import {FlightsComponent} from '../flights/flights.component';

const routes: Routes = [
    {path: '', component: FlightsComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
