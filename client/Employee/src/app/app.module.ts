import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './module/auth.module';
import { DashboardModule } from './module/dashboard.module';
import { EmployeeModule } from './module/employee.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
