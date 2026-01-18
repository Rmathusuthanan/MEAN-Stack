import Employee from "../models/employee.model.js";

const sign = async (req, res) => {
  const employees = await Employee.Employee.find();
  res.send(employees);
};

const Employees = async (req, res) => {
  const employees = await Employee.find();

  res.send(employees);
};

export default sign;
