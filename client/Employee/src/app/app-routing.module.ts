import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget-password.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './module/employee/employee.component';
import { AuthGuard } from './component/auth/auth.guard';
import { DepartmentComponent } from './module/department/department.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
