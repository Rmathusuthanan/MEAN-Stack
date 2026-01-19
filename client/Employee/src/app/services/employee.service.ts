import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  api = 'http://localhost:3000/api';
  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get(`${this.api}/employees`, { headers: this.headers })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
      );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
