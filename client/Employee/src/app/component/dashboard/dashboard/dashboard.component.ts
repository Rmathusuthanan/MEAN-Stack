import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  token = localStorage.getItem('token');
  featureCards = [
    {
      title: 'Employee Management',
      description: 'Manage employee profiles, departments, roles, and records.',
      badge: 'Available',
      badgeClass: 'bg-primary',
      buttonText: 'Open Employee Management',
      buttonClass: 'btn-primary',
      route: '/employee',
      available: true,
      highlights: [
        'Add and update employee profiles',
        'Assign departments and designations',
        'Track salary, status, and employee records',
      ],
    },
    {
      title: 'Department Management',
      description:
        'Create and organize departments for team structure and reporting.',
      badge: 'Available',
      badgeClass: 'bg-success',
      buttonText: 'Open Department Management',
      buttonClass: 'btn-success',
      route: '/department',
      available: true,
      highlights: [
        'Create department categories',
        'Group employees by team or function',
        'Keep company structure organized',
      ],
    },
    {
      title: 'Attendance',
      description: 'Monitor check-ins, work hours, and attendance history.',
      badge: 'Coming Soon',
      badgeClass: 'bg-warning text-dark',
      buttonText: 'Coming Soon',
      buttonClass: 'btn-outline-secondary',
      route: '/attendance',
      available: false,
      highlights: [
        'Track daily attendance',
        'Review punctuality reports',
        'Support time-based HR insights',
      ],
    },
    {
      title: 'Leave Management',
      description: 'Handle leave requests, approvals, and leave balances.',
      badge: 'Coming Soon',
      badgeClass: 'bg-warning text-dark',
      buttonText: 'Coming Soon',
      buttonClass: 'btn-outline-secondary',
      route: '/leave',
      available: false,
      highlights: [
        'Apply and approve leave requests',
        'Manage leave balances',
        'Review employee leave history',
      ],
    },
    {
      title: 'Payroll',
      description: 'Prepare payroll summaries and payslip details.',
      badge: 'Coming Soon',
      badgeClass: 'bg-warning text-dark',
      buttonText: 'Coming Soon',
      buttonClass: 'btn-outline-secondary',
      route: '/payroll',
      available: false,
      highlights: [
        'Prepare monthly payroll',
        'View payslip details',
        'Track salary calculations',
      ],
    },
    {
      title: 'Reports',
      description:
        'Generate reports for attendance, payroll, and employee activity.',
      badge: 'Coming Soon',
      badgeClass: 'bg-warning text-dark',
      buttonText: 'Coming Soon',
      buttonClass: 'btn-outline-secondary',
      route: '/reports',
      available: false,
      highlights: [
        'Create attendance reports',
        'Review payroll summaries',
        'Monitor workforce trends',
      ],
    },
  ];

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

  getDepartmentCount(): number {
    const departments = this.employees
      .map((employee) => employee.department)
      .filter((department): department is string => Boolean(department));

    return new Set(departments).size;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
