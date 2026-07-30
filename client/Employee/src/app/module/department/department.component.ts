import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: any[] = [];

  departmentForm = {
    name: '',
    description: '',
  };
  message = '';
  editMode = false;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe({
      next: (res: any[]) => {
        this.departments = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  saveDepartment(): void {
    if (!this.departmentForm.name) {
      return;
    }

    this.employeeService.addDepartment(this.departmentForm).subscribe({
      next: () => {
        this.message = 'Department created successfully.';
        this.departmentForm = { name: '', description: '' };
        this.loadDepartments();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteDepartment(id: string): void {
    if (!confirm('Delete this department?')) {
      return;
    }

    this.employeeService.deleteDepartment(id).subscribe({
      next: () => {
        this.message = 'Department deleted successfully.';
        this.loadDepartments();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
