import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees',
  template: ``,
  styles: [],
})
export class EmployeesComponent implements OnInit {
  @Input() employees: any;
  @Output() employeeSelected = new EventEmitter<any>();
  employee: any;
  searchByName!: string;
  get filteredEmployees() {
    if (!this.searchByName) {
      return this.employees;
    }

    return this.employees.filter((emp: any) =>
      emp.name.toLowerCase().includes(this.searchByName.toLowerCase()),
    );
  }
  trackById(index: number, employee: any): number {
    return employee.id;
  }

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  getEmployee(id: any) {}
}
