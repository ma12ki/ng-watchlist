import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import * as decode from 'jwt-decode';
import { IUser } from '../../../../../common/users';

@Injectable()
export class AuthService {
  public static get token() {
    return localStorage.getItem(AuthService.TOKEN_STORAGE_KEY);
  }
  private static TOKEN_STORAGE_KEY = 'AUTH_TOKEN';
  private _token: string;
  private _token$: BehaviorSubject<string>;
  private _user: IUser;
  private _user$: BehaviorSubject<IUser>;
  private _isAuthenticated: boolean;
  private _isAuthenticated$: BehaviorSubject<boolean>;

  constructor() {
    this._token = AuthService.token;
    this._token$ = new BehaviorSubject<string>(this._token);

    if (this._token) {
      this._user = decode(this._token);
    }
    this._user$ = new BehaviorSubject<IUser>(this._user);

    this._isAuthenticated = this._user != null;
    this._isAuthenticated$ = new BehaviorSubject<boolean>(this._isAuthenticated);
  }

  logIn(login: string, password: string, rememberMe: boolean = false) {

  }

  logOut() {

  }

}
