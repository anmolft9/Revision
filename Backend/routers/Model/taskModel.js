import taskSchema from "./taskSchema.js";

////Create task
export const insertTask = (taskObj) => {
  return taskSchema(taskObj).save();
};

///Read task
export const getTask = () => {
  return taskSchema.find();
};

export const getSingleTask = (_id) => {
  return taskSchema.findById(_id);
};

///Update Task
export const updateTask = (_id, type) => {
  return taskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

//Delete Task
export const deleteTaskById = (_id) => {
  return taskSchema.findByIdAndDelete(_id);
};
export const deleteManyTask = (ids) => {
  return taskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
