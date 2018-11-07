import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {DragulaComponent} from './dragula-page/dragula.component';
import {PlagnPlayComponent} from './plagn-play-page/plagn-play.component';
import {HomeComponent} from './home-page/home.component';
import {WorkersComponent} from './workers-page/workers.component';
import {WorkersAddComponent} from './workers-page/workers-add/workers-add.component';
import {AuthGuard} from '../model/auth.guard';

const routes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'draggula', component: DragulaComponent},
      {path: 'plagn', component: PlagnPlayComponent},
      {
        path: 'workers', component: WorkersComponent, children: [
          {path: 'add', component: WorkersAddComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
