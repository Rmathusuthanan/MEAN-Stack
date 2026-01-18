import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { RegisterRequest } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  register(user: RegisterRequest) {
    console.log(user);
    return this.http.post(`${this.api}/register`, user).pipe(
      map((res: any) => {
        console.log(res);
      }),
    );
  }

  login(user: any) {
    return this.http.post(`${this.api}/login`, user).pipe(
      map((res: any) => {
        console.log(res);
      }),
    );
  }
}
