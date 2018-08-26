import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from '../components/flights/flights.component';
import {AuthGuard} from '../guard/authGuard';
import {LoginComponent} from '../components/login/login.component';

const routes: Routes = [
    // {path: '', component: FlightsComponent, canActivate: [AuthGuard]},
    {path: '', component: FlightsComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
