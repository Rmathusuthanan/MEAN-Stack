import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AuthModule } from './module/auth.module';
import { DashboardModule } from './module/dashboard.module';
import { EmployeeModule } from './module/employee.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/dashboard/employee/employee.component';
import { EmployeesComponent } from './component/dashboard/employees/employees.component';

const routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./module/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./module/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./module/employee.module').then((m) => m.EmployeeModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
