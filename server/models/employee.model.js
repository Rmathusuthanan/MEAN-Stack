import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
    trim: true,
  },
  joiningDate: Date,
  status: Boolean,
});

const depatrmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const LeaveSchema = new Schema({
  employeeId: String,
  fromDate: Date,
  toDate: Date,
  reason: String,
  status: String,
});

const Employee = model("Employee", employeeSchema);
const Department = model("Deparment", depatrmentSchema);

export default { Employee, Department };
