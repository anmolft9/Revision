import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

///connect the database

import { dbConnect } from "../../FullStack-NoToDoList/api/src/routers/config/dbConfig";
dbConnect();

//put the routers

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Welcome to the base",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`port on http://localhost:${PORT}`);
});
