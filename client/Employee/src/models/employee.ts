export interface Employee {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  department: string;
  designation: string;
  salary: number;
  joiningDate: string;
  dateOfBirth: string;
  status: 'active' | 'inactive';
  createdAt?: string;
  updatedAt?: string;
}
