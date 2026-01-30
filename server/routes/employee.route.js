import express from "express";
import {
  getEmployeeById,
  getEmployees,
} from "../controller/employee.controller.js";

const route = express.Router();

route.get("/employees", getEmployees);
route.get("/employee/:Id", getEmployeeById);

export default route;
