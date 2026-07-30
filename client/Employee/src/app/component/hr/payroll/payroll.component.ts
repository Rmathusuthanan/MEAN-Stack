import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css'],
})
export class PayrollComponent {
  payrollEntries = [
    { employee: 'Amina Khan', month: 'July 2026', salary: 4500, netPay: 3850 },
    { employee: 'Daniel Cruz', month: 'July 2026', salary: 3200, netPay: 2780 },
  ];
}
