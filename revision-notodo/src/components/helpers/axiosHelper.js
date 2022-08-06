import axios from "axios";

const apiEp = "http://localhost:8000/api/v1/task";

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(apiEp);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postTask = async (obj) => {
  try {
    console.log(obj);
    const { data } = await axios.post(apiEp, obj);
    console.log(data);
    // console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
