import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { CanLeavePhoneCreateGuard } from './shared/guards/can-leave-phone-create.guard';
import { PhoneDetailsResolverGuard } from './shared/resolvers/phone-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { PhoneCreateComponent } from './components/phone/phone-create/phone-create.component';
import { PhoneBaseComponent } from './components/phone/phone-base/phone-base.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneItemComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    PhoneCreateComponent,
    PhoneBaseComponent
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
    UsersService,
    IsAuthenticatedGuard,
    PhoneDetailsResolverGuard,
    CanLeavePhoneCreateGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
