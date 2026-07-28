import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
