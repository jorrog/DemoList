import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from './material/app.material.module';
import {KendoComponentsModule} from './kendoui/kendo-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { UserListComponent } from './user-list/user-list.component';

const components = [
  UserCardComponent,
  DatePickerComponent,
  UserListComponent
];
const directives = [];
const pipes = [];

const declarations = [
  ...components,
  ...directives,
  ...pipes
];

const entryComponents = [
  ...components
];

const imports = [
  ReactiveFormsModule,
  RouterModule,
  FormsModule,
  AppMaterialModule,
  KendoComponentsModule,
];

const providers = [];

const forExports = [
  ...components,
  ...imports,
  ...directives,
  ...pipes
];

@NgModule({
  imports: [
    CommonModule,
    ...imports
  ],
  declarations,
  exports: forExports,
  entryComponents: [...entryComponents],
  providers: providers,
})
export class SharedModule { }
