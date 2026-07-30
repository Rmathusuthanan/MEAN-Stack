import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisterRequest } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(user: RegisterRequest): Observable<any> {
    return this.http
      .post(`${this.api}/register`, user, { observe: 'response' })
      .pipe(map((res: any) => res));
  }

  login(email: string, password: string): Observable<any> {
    const user = {
      email,
      password,
    };

    return this.http.post(`${this.api}/login`, user).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token || '');
        localStorage.setItem('user', JSON.stringify(res.user || {}));
        return res;
      }),
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): any {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  getCurrentRole(): string {
    const user = this.getCurrentUser();
    return (user?.role || '').toString().toLowerCase();
  }

  isAdmin(): boolean {
    const role = this.getCurrentRole();
    return role === 'admin' || role === 'superadmin' || role === 'super-admin';
  }

  isSuperAdmin(): boolean {
    const role = this.getCurrentRole();
    return role === 'superadmin' || role === 'super-admin';
  }

  isUser(): boolean {
    const role = this.getCurrentRole();
    return role === 'user' || role === 'employee' || role === 'member';
  }
}
