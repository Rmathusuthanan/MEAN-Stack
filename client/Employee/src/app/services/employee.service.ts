import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/employees`, {
      headers: this.getHeaders(),
    });
  }

  addEmployee(employee: Partial<Employee>): Observable<Employee> {
    return this.http.post<Employee>(`${this.api}/employees`, employee, {
      headers: this.getHeaders(),
    });
  }

  updateEmployee(
    id: string,
    employee: Partial<Employee>,
  ): Observable<Employee> {
    return this.http.put<Employee>(`${this.api}/employees/${id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  deleteEmployee(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.api}/employees/${id}`,
      {
        headers: this.getHeaders(),
      },
    );
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/employees/departments`, {
      headers: this.getHeaders(),
    });
  }

  addDepartment(department: { name: string; description: string }) {
    return this.http.post(`${this.api}/employees/departments`, department, {
      headers: this.getHeaders(),
    });
  }

  deleteDepartment(id: string) {
    return this.http.delete(`${this.api}/employees/departments/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
