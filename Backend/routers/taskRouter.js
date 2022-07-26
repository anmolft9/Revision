import express from "express";
import { insertTask, getSingleTask, getTask } from "./Model/taskModel.js";

const router = express.Router();

// router.get("/", async (req, res, next) => {
//   //   console.log(req.body);
//   const results = await getSingleTask(req.body);
//   try {
//     res.json({
//       status: "success",
//       message: "get route",
//       results,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/:_id?", async (req, res, next) => {
  //   console.log(req.body);
  const { _id } = req.params;
  const results = _id ? await getSingleTask(_id) : await getTask();
  try {
    res.json({
      status: "success",
      message: "get route",
      results,
    });
  } catch (error) {
    next(error);
  }
});

// router.post("/", (req, res, next) => {
//   //   console.log(req.body);
//   try {
//     res.json({
//       status: "success",
//       message: "get route",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

///insert task
router.post("/", async (req, res, next) => {
  //   console.log(req.body);

  const result = await insertTask(req.body);
  //   console.log(result);

  try {
    res.json({
      status: "success",
      message: "insert task route",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
