import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Employee = model("Employee", employeeSchema);
const Department = model("Department", departmentSchema);

export { Employee, Department };
export default { Employee, Department };
