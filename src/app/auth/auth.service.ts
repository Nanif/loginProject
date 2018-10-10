import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('tokenKey');
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }
}
