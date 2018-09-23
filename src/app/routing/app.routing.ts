import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from '../components/flights/flights.component';
import {AuthGuard} from '../guard/authGuard';
import {LoginComponent} from '../components/login/login.component';
import {SelectComponent} from '../components/select/select.component';

const routes: Routes = [
    // {path: '', component: FlightsComponent, canActivate: [AuthGuard]},
    {
        path: 'search',
        component: FlightsComponent,
        data: {
            breadcrumb: 'Search Page'
        },
        children: [
            {
                path: 'select',
                component: SelectComponent,
                data: {
                    breadcrumb: 'Select Page'
                },
            }
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'search'}
];

export const routing = RouterModule.forRoot(routes);
