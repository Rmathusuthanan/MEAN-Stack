import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../component/dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from 'src/app/module/employee/employee.component';
import { EmployeeModule } from 'src/app/module/employee.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, EmployeeComponent, EmployeeModule, AgGridModule],
})
export class DashboardModule {}
