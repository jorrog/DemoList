import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import {throwError} from 'rxjs';

@Injectable()
export class DemoHttp {

  constructor(
    private http: HttpClient,
  ) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    const token = '';
    return headers.append('Authorization', 'Bearer ' + token);
  }

  get(url: string, options = {headers: new HttpHeaders()}): Observable<any> {
    options.headers = this.createAuthorizationHeader(options.headers);
    return this.http.get<any>(url, options).catch(this.handleError);
  }

  post(url: string, data: any, options = {headers: new HttpHeaders()}): Observable<any> {
    options.headers = this.createAuthorizationHeader(options.headers);
    return this.http.post<any>(url, data, options).catch(this.handleError);
  }

  put(url: string, data: any, options = {headers: new HttpHeaders()}): Observable<any> {
    options.headers = this.createAuthorizationHeader(options.headers);
    return this.http.put<any>(url, data, options).catch(this.handleError);
  }

  delete(url: string, options = {headers: new HttpHeaders()}) {
    options.headers = this.createAuthorizationHeader(options.headers);
    return this.http.delete(url, options).catch(this.handleError);
  }

  handleError = (res) => {
    const message = res.error && res.error.Message ? res.error.Message : 'There is an error';
    return throwError(new Error(message));
  }

}
