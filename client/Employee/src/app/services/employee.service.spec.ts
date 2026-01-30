/*import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpctrl: HttpTestingController;

  const mockEmployees: any[] = [
    { id: 1, name: 'Mathu' },
    { id: 2, name: 'Prabhu' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    employeeService = TestBed.inject(EmployeeService);
    httpctrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpctrl.verify(); // ✅ important
  });

  it('should create the service', () => {
    expect(employeeService).toBeTruthy();
  });

  it('should get employee list', () => {
    employeeService.getEmployees().subscribe((employees) => {
      expect(employees).toEqual(mockEmployees);
      expect(employees.length).toBe(2);
    });

    const req = httpctrl.expectOne(`${employeeService['api']}/employees`);

    expect(req.request.method).toBe('GET');
    expect(req.request.headers).toBeTruthy();

    req.flush(mockEmployees);
  });

  it('should fetch employee by id', () => {
    const id = mockEmployees[0].id;

    employeeService.getEmployeeById(id).subscribe((employee) => {
      expect(employee).toEqual(mockEmployees[0]);
    });

    const req = httpctrl.expectOne(`${employeeService['api']}/employee/${id}`);

    expect(req.request.method).toBe('GET');
    expect(req.request.headers).toBeTruthy();

    req.flush(mockEmployees[0]);
  });
});

describe('isAuthenticated', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    localStorage.clear();
    service = TestBed.inject(EmployeeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return TRUE if token exists', () => {
    localStorage.setItem('token', 'fake-token');
    service.token = localStorage.getItem('token');

    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should return FALSE if token does not exist', () => {
    localStorage.removeItem('token');
    expect(service.isAuthenticated()).toBeFalse();
  });
});
*/
