import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


const routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'prefix'},
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'details/:username',
        component: DetailsComponent,
      },
    ]
  }
];
/**
 * This module is responsible only for dashboard routes
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/**
 * App routing class
 */
export class UsersRoutingModule { }
