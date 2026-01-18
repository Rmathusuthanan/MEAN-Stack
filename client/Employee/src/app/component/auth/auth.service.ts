import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.api}/register`, user);
  }

  login(user: any) {
    return this.http.post(`${this.api}/login`, user);
  }
}
