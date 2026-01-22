const express = require("express");
import { getDepartment } from "./../controller/department.controller";

const route = express.Router();

route.get("/", getDepartment);

module.exports = route;
