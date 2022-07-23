import express from "express";

const app = express();
const PORT = 8000;

///connect the database

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
