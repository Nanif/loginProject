import { Injectable } from '@angular/core';
import { HttpClient, headersToString } from '../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from '../../../node_modules/rxjs';
import { RequestOptions, Http,Headers } from "@angular/http";
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Injectable()
export class UserService {

constructor(private http:Http)
{}

login(email: string, password: string): Observable<any> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let body = JSON.stringify(
  {
  "email": email,
  "password": password
  }
  );
  let options = new RequestOptions({ headers:headers });

  return this.http.post('http://server.simplestate.me/api/user/auth/login', body,options)
  .map((response: any) => response.json())
  .catch((response: HttpErrorResponse) => Observable.throw(response));
  
  }


}
  