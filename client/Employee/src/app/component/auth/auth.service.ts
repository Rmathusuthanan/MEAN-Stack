import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { RegisterRequest } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  register(user: RegisterRequest): Observable<any> {
    console.log(user);
    return this.http
      .post(`${this.api}/register`, user, { observe: 'response' })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
      );
  }

  login(email: string, password: string): Observable<any> {
    const user = {
      email,
      password,
    };
    return this.http.post(`${this.api}/login`, user).pipe(
      map((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        return res;
      }),
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
