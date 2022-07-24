import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost:8000/revision_list";
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
