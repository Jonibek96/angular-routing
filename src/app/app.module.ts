import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AuthModule} from './auth/auth.module';
import {ModelModule} from './model/model.module';
import {UserService} from './model/user.service';
import {AuthService} from './model/auth.service';
import {AuthGuard} from './model/auth.guard';
import {FilterPipe} from './shared/pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModelModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
