import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'phones', pathMatch: 'full'},
    { path: 'phones', component: PhoneListComponent},
    { path: 'phones/:id', component: PhoneItemComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
