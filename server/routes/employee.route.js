import express from "express";
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controller/employee.controller.js";

const router = express.Router();

router.get("/", getEmployees);
router.get("/departments", getDepartments);
router.post("/departments", addDepartment);
router.put("/departments/:id", updateDepartment);
router.delete("/departments/:id", deleteDepartment);
router.get("/:id", getEmployeeById);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
