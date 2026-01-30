/*import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RegisterComponent } from '../component/auth/register/register.component';
import { AuthService } from '../component/auth/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
describe('Register Component', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['register']);
    const rSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: rSpy },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alert if passwords do not match', () => {
    spyOn(window, 'alert');
    component.registerRequest.password = '123';
    component.registerRequest.confirmPassword = '456';

    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Passwords do not match');
  });

  it('should register successfully and navigate', fakeAsync(() => {
    spyOn(window, 'alert');

    component.form.setValue({
      name: 'Test',
      email: 'test@test.com',
      password: '123456',
      confirmPassword: '123456',
      role: 'Admin',
    });

    authServiceSpy.register.and.returnValue(of({ status: 201 }));

    component.onSubmit();
    tick();

    expect(authServiceSpy.register).toHaveBeenCalledWith(component.form.value);
    expect(window.alert).toHaveBeenCalledWith('Registration successful');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  }));
});*/
