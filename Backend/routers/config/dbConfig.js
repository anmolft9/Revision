import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost:27017/myDB";
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};

// MONGO_URI=mongodb://localhost:27017/myDB.
