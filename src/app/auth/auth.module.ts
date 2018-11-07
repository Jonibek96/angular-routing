import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {

}
