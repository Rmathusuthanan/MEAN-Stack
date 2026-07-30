import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css'],
})
export class LeaveManagementComponent {
  leaveRequests = [
    { employee: 'Amina Khan', type: 'Sick Leave', days: 2, status: 'Approved' },
    {
      employee: 'Daniel Cruz',
      type: 'Casual Leave',
      days: 3,
      status: 'Pending',
    },
  ];
}
