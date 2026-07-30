import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [EmployeeComponent, DepartmentComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [EmployeeComponent, DepartmentComponent],
})
export class EmployeeModule {}
