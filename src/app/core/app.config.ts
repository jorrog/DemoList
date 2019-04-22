import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class AppConfig {
  config = {
  };

  buildUri(): string {
    const base = environment.apiUrl;
    return base;
  }

}
