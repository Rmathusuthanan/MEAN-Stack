import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard/dashboard.component';
import { LeaveManagementComponent } from '../component/hr/leave-management/leave-management.component';
import { PayrollComponent } from '../component/hr/payroll/payroll.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeaveManagementComponent,
    PayrollComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [DashboardComponent, LeaveManagementComponent, PayrollComponent],
})
export class DashboardModule {}
