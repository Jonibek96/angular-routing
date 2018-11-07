import {NgModule} from '@angular/core';

import {PalgnService} from './palgn-service';
import {HttpClientModule} from '@angular/common/http';
import {WorkersService} from './workers.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {UserService} from './user.service';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PalgnService,
    WorkersService
  ]
})
export class ModelModule {

}
