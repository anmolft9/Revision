import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(helmet());
///connect the database

import { dbConnect } from "./routers/config/dbConfig.js";
dbConnect();

//put the routers
import taskRouter from "./routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Welcome to the base",
  });
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`port on http://localhost:${PORT}`);
});
