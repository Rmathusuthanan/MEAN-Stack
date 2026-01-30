import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
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

  // AG Grid column definitions
  columns: ColDef<any>[] = [
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      filter: true,
      cellRenderer: (params: any) => {
        return `<a href="/employee/${params.data._id}">${params.value}</a>`;
      },
    },
    { field: 'age', headerName: 'Age', sortable: true, filter: true },
    { field: 'gender', headerName: 'Gender', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
  ];

  // Row data for AG Grid
  rowData: Employee[] = [];

  constructor(
    public employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.employees = res.emp;
        this.rowData = this.employees; // assign to AG Grid
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

  getEmployee(employee: any) {
    console.log('Selected Employee:', employee);
  }
}
