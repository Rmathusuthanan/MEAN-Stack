import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  message = '';
  editMode = false;
  selectedEmployeeId = '';

  employeeForm: Partial<Employee> = {
    name: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    designation: '',
    salary: 0,
    joiningDate: '',
    dateOfBirth: '',
    status: 'active',
  };

  departmentForm = {
    name: '',
    description: '',
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res: Employee[]) => {
        this.employees = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  saveEmployee(): void {
    if (this.editMode && this.selectedEmployeeId) {
      this.employeeService
        .updateEmployee(this.selectedEmployeeId, this.employeeForm)
        .subscribe({
          next: () => {
            this.message = 'Employee updated successfully.';
            this.resetForm();
            this.loadEmployees();
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else {
      this.employeeService.addEmployee(this.employeeForm).subscribe({
        next: () => {
          this.message = 'Employee added successfully.';
          this.resetForm();
          this.loadEmployees();
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  editEmployee(employee: Employee): void {
    this.editMode = true;
    this.selectedEmployeeId = employee._id ?? '';
    this.employeeForm = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      department: employee.department,
      designation: employee.designation,
      salary: employee.salary,
      joiningDate: employee.joiningDate?.slice(0, 10) ?? '',
      dateOfBirth: employee.dateOfBirth?.slice(0, 10) ?? '',
      status: employee.status,
    };
  }

  deleteEmployee(id?: string): void {
    if (!id || !confirm('Delete this employee?')) {
      return;
    }

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.message = 'Employee deleted successfully.';
        this.loadEmployees();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  resetForm(): void {
    this.editMode = false;
    this.selectedEmployeeId = '';
    this.employeeForm = {
      name: '',
      email: '',
      phone: '',
      address: '',
      department: '',
      designation: '',
      salary: 0,
      joiningDate: '',
      dateOfBirth: '',
      status: 'active',
    };
  }
}
