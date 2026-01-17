import express from "express";

const route = express.Router();

route.get("/sign", (req, res) => {
  res.send("Sign Page");
});

export default route;
