import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  imports: [CommonModule],
})
export class EmployeeComponent implements OnInit {
  employeeId!: string;
  employee: any;
  isLoading = false;
  constructor(
    public empServices: EmployeeService,
    public router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.employeeId = this.router.snapshot.paramMap.get('id')!;
      this.empServices.getEmployeeById(this.employeeId).subscribe((res) => {
        this.employee = res;
        this.isLoading = false;
      });
    }, 1000);
  }
}
