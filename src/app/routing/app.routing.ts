import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from '../components/flights/flights.component';
import {LoginComponent} from '../components/login/login.component';
import {SelectComponent} from '../components/select/select.component';
import {SelectGuardGuard} from '../guard/select-guard.guard';

const routes: Routes = [
    // {path: '', component: FlightsComponent, canActivate: [AuthGuard]},
    {
        path: 'search',
        component: FlightsComponent,
        data: {
            breadcrumb: 'Search Page'
        }
    },
    {
        path: 'select',
        component: SelectComponent,
        data: {
            breadcrumb: 'Select Page'
        },
        canActivate: [SelectGuardGuard]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'search'}
];

export const routing = RouterModule.forRoot(routes);
