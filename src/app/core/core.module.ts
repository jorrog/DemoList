import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppConfig} from './app.config';
import {DemoHttp} from './http/http-client.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    AppConfig,
    DemoHttp
  ]
})
export class CoreModule { }
