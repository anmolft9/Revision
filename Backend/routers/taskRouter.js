import express from "express";
import {
  insertTask,
  getSingleTask,
  getTask,
  deleteTaskById,
  updateTask,
  deleteManyTask,
} from "./Model/taskModel.js";

const router = express.Router();

///Get Methods
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

///Post Method
router.post("/", async (req, res, next) => {
  //   console.log(req.body);

  //   console.log(result);

  try {
    // console.log("check");
    const result = await insertTask(req.body);
    // console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "insert task route",
          result,
        })
      : res.json({
          status: "failed",
          message: "failed",
          result,
        });
  } catch (error) {
    next(error);
  }
});

///Patch Method
router.patch("/", async (req, res, next) => {
  //   console.log(req.body);

  const { _id, type } = req.body;
  //   console.log(req.body);
  const result = await updateTask(_id, type);
  //   console.log(result);

  try {
    res.json({
      status: "success",
      message: "updated task",
      result,
    });
  } catch (error) {
    next(error);
  }
});

///Delete Method
router.delete("/", async (req, res, next) => {
  //   console.log(req.body);
  const ids = req.body;
  const result = await deleteManyTask(ids);
  //   console.log(result);

  try {
    res.json({
      status: "success",
      message: "Deleted task",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
