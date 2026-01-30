import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from '../component/auth/auth.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { ForgetPasswordComponent } from '../component/auth/forget-password/forget-password.component';
import { HighlightDirective } from '../highlight.directive';
import { AppUnlessDirective } from '../app-unless.directive';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HighlightDirective,
    AppUnlessDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HighlightDirective, AppUnlessDirective],
})
export class AuthModule {}
