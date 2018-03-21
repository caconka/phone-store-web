import { User } from './../model/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private static readonly BASE_API = `${environment.baseApi}/session`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: SessionService.defaultHeaders, withCredentials: true });

  private user: User;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  }

  authenticate(user: User): Observable<User> {
    return this.http.post(SessionService.BASE_API, JSON.stringify(user), SessionService.defaultOptions)
      .map(res => {
        return this.doAuthentication(res.json());
      })
      .catch(error => this.handleError(error));
  }

  logout(): Observable<void> {
    return this.http.delete(SessionService.BASE_API, SessionService.defaultOptions)
      .map(res => {
        return this.doLogout();
      })
      .catch(error => this.handleError(error));
  }

  private doAuthentication(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));

    return this.user;
  }

  private doLogout(): void {
    this.user = null;
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  private handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(`${this.constructor.name} error: ${error}`);
    }

    return Observable.throw(error.json());
  }
}

