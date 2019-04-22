import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {DemoHttp} from '../core/http/http-client.service';
import {AppConfig} from '../core/app.config';
import {UserModel} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private appConfig: AppConfig,
    private demoHttp: DemoHttp
  ) { }

  getAllUsers () {
    return this.demoHttp.get(
      `${this.appConfig.buildUri()}/Users`
    );
  }

  addUser(data: UserModel) {
    return this.demoHttp.post(
      `${this.appConfig.buildUri()}/Users`,
      data
    );
  }

  updateUser(data: UserModel) {
    return this.demoHttp.put(
      `${this.appConfig.buildUri()}/Users/${data.id}`,
      data
    );
  }
}
