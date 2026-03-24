import { Routes } from '@angular/router';
import { PatientList } from './patient-list/patient-list';
import { PatientAdd } from './patient-add/patient-add';
import { PatientEdit } from './patient-edit/patient-edit';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Register } from './register/register';
import { AppointmentList } from './appointment-list/appointment-list';
import { AppointmentAdd } from './appointment-add/appointment-add';
import { Dashboard } from './dashboard/dashboard';


export const routes: Routes = [
    { path: '', component: Dashboard, canActivate: [authGuard] },
    { path: 'patients', component: PatientList, canActivate: [authGuard] },
    { path: 'add', component: PatientAdd, canActivate: [authGuard] },
    { path: 'edit/:id', component: PatientEdit, canActivate: [authGuard] },

    { path: 'login', component: Login },
    { path: 'register', component: Register },

    { path: 'appointments', component: AppointmentList, canActivate: [authGuard] },
    { path: 'book', component: AppointmentAdd, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];