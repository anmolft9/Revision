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
export const updateTask = (_id) => {
  return taskSchema.findByIdAndUpdate(_id);
};

//Delete Task
export const deleteTaskById = (_id) => {
  return taskSchema.findByIdAndDelete(_id);
};
export const deleteTask = (_ids) => {
  return taskSchema.deleteMany();
};
