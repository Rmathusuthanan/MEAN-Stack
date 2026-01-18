export interface User {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  role: string;
}

export interface RegisterResponse {
  message: string;
}

export {};
