import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from '../component/auth/auth.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { ForgetPasswordComponent } from '../component/auth/forget-password/forget-password.component';
import { AdminComponent } from '../component/auth/login/admin/admin.component';
import { UserComponent } from '../component/auth/login/user/user.component';
import { SuperAdminComponent } from '../component/auth/login/super-admin/super-admin.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AdminComponent,
    UserComponent,
    SuperAdminComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
