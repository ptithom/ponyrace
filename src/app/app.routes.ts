import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import {RegisterFormComponent} from './register-form/register-form.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'races', component: RacesComponent },
    { path: 'login', component: RegisterFormComponent }
];
