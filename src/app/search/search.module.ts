import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import {SharedModule} from '../shared/shared.module';
import {SearchRoutingModule} from './search-routing.module';

@NgModule({
  declarations: [ResultsComponent, SearchFieldComponent],
  exports: [SearchFieldComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
})
export class SearchModule { }
