import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User, RegisterRequest, RegisterResponse } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerRequest: RegisterRequest = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: '',
  };
  form!: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.registerRequest.role = 'user';
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.registerRequest.password !== this.registerRequest.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.register(this.form.value).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
