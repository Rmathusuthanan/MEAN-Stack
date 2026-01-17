import express from "express";

import route from "./routes/auth.route.js";
import connectDB from "./lib/db.js";

const app = express();

app.use(route);
const PORT = 3000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
