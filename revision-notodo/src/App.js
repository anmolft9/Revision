import "./App.css";

import { Container, NavItem, Button } from "react-bootstrap";
import { ListForm } from "./components/ListForm";
import { ListArea } from "./components/ListArea";
import { useEffect, useState } from "react";
import {
  deleteServerTask,
  fetchTasks,
  postTask,
  switchServerTask,
} from "./components/helpers/axiosHelper";

function App() {
  const [formValue, setFormValue] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getTaskFromServer();
  }, []);

  const getTaskFromServer = async () => {
    const data = await fetchTasks();
    // console.log(data);

    data.status === "success" && setFormValue(data.results);
  };

  const getTheData = async (task) => {
    setFormValue([...formValue, task]);
    // console.log(task);

    const result = await postTask(task);
    // console.log(result);
    // console.log(result, "flag");
    // fetchTasks(result);

    result.status === "success" && getTaskFromServer();
  };

  const switchTask = async (_id, type) => {
    // console.log(id, type);
    // const switchedArgs = formValue.map((item) => {
    //   if (item._id === _id) {
    //     item.type = type;
    //   }
    //   return item;
    // });
    // // console.log(switchedArgs);
    // setFormValue(switchedArgs);

    const data = await switchServerTask({ _id, type });
    data.status === "success" && getTaskFromServer();
  };

  ///handle on Check

  const handleOnCheck = (e) => {
    // console.log("clicked");
    const { value, checked } = e.target;
    // console.log(checked, value);
    // console.log(e.value);

    if (value === "entry" || value === "bad") {
      let toDelete = [];
      formValue.forEach((item) => {
        // console.log(item);
        if (item.type === value) {
          toDelete.push(item._id);
        }
      });

      // console.log(toDelete, value);

      if (checked) {
        setIds([...ids, ...toDelete]);
        // console.log(ids);
      } else {
        const tempArgs = ids.filter((id) => !toDelete.includes(id));
        setIds(tempArgs);
      }
      return;
    }
    if (checked) {
      setIds([...ids, value]);
      // console.log(ids);
    } else {
      const removeIds = ids.filter((item) => item !== value);
      // console.log(removeIds);
      setIds(removeIds);
    }
  };

  /////Handle ON Delete
  const handleOnDelete = async () => {
    // console.log(ids);
    // const filteredArr = formValue.filter((item) => !ids.includes(item.id));
    // setFormValue(filteredArr);
    // setIds([]);

    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }

    const data = await deleteServerTask(ids);

    if (data.status === "success") {
      getTaskFromServer();
      setIds([]);
    }
  };

  // console.log(formValue);
  return (
    <div className="wrapper">
      <Container>
        <div className="text-center mb-5 pt-5">
          <h1>My Not-to Do List</h1>
        </div>

        {/* form component */}
        <ListForm getTheData={getTheData} />

        {/* here goes the list area */}
        <ListArea
          formValue={formValue}
          switchTask={switchTask}
          handleOnCheck={handleOnCheck}
          ids={ids}
        />

        {/* delete button */}
        <div>
          {ids.length > 0 && (
            <Button onClick={handleOnDelete} variant="danger">
              Delete
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
