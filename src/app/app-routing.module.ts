import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AuthGuard} from './model/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
