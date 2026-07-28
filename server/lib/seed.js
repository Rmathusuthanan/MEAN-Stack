import { Department, Employee } from "../models/employee.model.js";

const demoDepartments = [
  {
    name: "Engineering",
    description: "Builds and maintains product features.",
  },
  {
    name: "Human Resources",
    description: "Manages employee lifecycle and benefits.",
  },
  {
    name: "Sales",
    description: "Drives revenue and customer growth.",
  },
  {
    name: "Finance",
    description: "Handles financial operations and reporting.",
  },
];

const demoEmployees = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-0123",
    address: "210 Elm St, Springfield",
    department: "Engineering",
    designation: "Software Engineer",
    salary: 85000,
    joiningDate: new Date("2024-02-10"),
    dateOfBirth: new Date("1990-06-12"),
    status: "active",
  },
  {
    name: "Brian Lee",
    email: "brian.lee@example.com",
    phone: "555-0456",
    address: "459 Maple Ave, Springfield",
    department: "Human Resources",
    designation: "HR Manager",
    salary: 75000,
    joiningDate: new Date("2023-08-05"),
    dateOfBirth: new Date("1985-11-03"),
    status: "active",
  },
  {
    name: "Charlotte Green",
    email: "charlotte.green@example.com",
    phone: "555-0789",
    address: "101 Pine St, Springfield",
    department: "Sales",
    designation: "Sales Executive",
    salary: 68000,
    joiningDate: new Date("2024-01-15"),
    dateOfBirth: new Date("1992-03-17"),
    status: "active",
  },
  {
    name: "Diana Smith",
    email: "diana.smith@example.com",
    phone: "555-0999",
    address: "77 Oak Ln, Springfield",
    department: "Finance",
    designation: "Accountant",
    salary: 72000,
    joiningDate: new Date("2022-05-20"),
    dateOfBirth: new Date("1988-12-05"),
    status: "inactive",
  },
];

const seedDemoData = async () => {
  try {
    const departmentCount = await Department.countDocuments();
    if (departmentCount === 0) {
      await Department.insertMany(demoDepartments);
      console.log("Demo departments seeded.");
    }

    const employeeCount = await Employee.countDocuments();
    if (employeeCount === 0) {
      await Employee.insertMany(demoEmployees);
      console.log("Demo employees seeded.");
    }
  } catch (error) {
    console.error("Error seeding demo data:", error);
  }
};

export default seedDemoData;
