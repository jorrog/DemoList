import { NgModule } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LayoutModule } from '@progress/kendo-angular-layout';

const imports = [
  RippleModule,
  InputsModule,
  GridModule,
  ButtonsModule,
  NotificationModule,
  DropDownsModule,
  DialogsModule,
  ChartsModule,
  LayoutModule
];

@NgModule({
  imports: imports,
  exports: imports
})
export class KendoComponentsModule { }
