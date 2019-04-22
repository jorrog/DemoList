import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ResultsComponent} from './results/results.component';


const routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'results', pathMatch: 'prefix'},
      {
        path: 'results',
        component: ResultsComponent,
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
export class SearchRoutingModule { }
