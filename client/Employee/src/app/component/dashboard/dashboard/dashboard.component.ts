import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../../models/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  employees: Employee[] = [];
  token = localStorage.getItem('token');

  constructor(
    public employeeService: EmployeeService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (res: Employee[]) => {
        this.employees = res;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
