import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { PhonesService } from './shared/services/phones.service';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';
import { LoginComponent } from './components/misc/login/login.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneItemComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PhonesService,
    SessionService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
