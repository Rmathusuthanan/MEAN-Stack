import express from "express";
import { register, login } from "../controller/auth.controller.js";
import { getEmployees } from "../controller/employee.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/employees", getEmployees);

export default router;
