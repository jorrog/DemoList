import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatChipsModule,
  MatOptionModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatStepperModule,
  MatBadgeModule,
  MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

const imports = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatChipsModule,
  MatOptionModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatStepperModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: imports,
  exports: imports
})
export class AppMaterialModule {}
