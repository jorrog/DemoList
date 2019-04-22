import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {UsersRoutingModule} from './users-routing.module';
import { DetailsComponent } from './details/details.component';
import {SharedModule} from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
