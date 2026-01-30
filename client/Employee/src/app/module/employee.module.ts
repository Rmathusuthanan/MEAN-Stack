import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../component/dashboard/employee/employee.component';
import { EmployeesComponent } from '../component/dashboard/employees/employees.component';
import { RouterModule } from '@angular/router';
import { ɵInternalFormsSharedModule } from '@angular/forms';
@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ɵInternalFormsSharedModule,
  ],
  exports: [EmployeeComponent, EmployeesComponent],
})
export class EmployeeModule {}
