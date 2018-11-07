import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {DragulaModule} from 'ng2-dragula';

import {ModelModule} from '../model/model.module';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import {DragulaComponent} from './dragula-page/dragula.component';
import {DirectiveDrag} from './dragula-page/directives/directive.drag';
import {PlagnPlayComponent} from './plagn-play-page/plagn-play.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {HomeComponent} from './home-page/home.component';
import {WorkersComponent} from './workers-page/workers.component';
import {WorkersAddComponent} from './workers-page/workers-add/workers-add.component';
import {CouterDirective} from './workers-page/couter.directive';
import {FilterPipe} from '../shared/pipe/filter.pipe';

@NgModule({
  declarations: [
    DragulaComponent,
    DirectiveDrag,
    PlagnPlayComponent,
    HeaderComponent,
    HomeComponent,
    WorkersComponent,
    SystemComponent,
    WorkersAddComponent,
    CouterDirective,
    FilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    DragAndDropModule,
    DragulaModule.forRoot(),
    SystemRoutingModule
  ]
})
export class SystemModule {

}
