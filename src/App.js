import "./App.css";

import { Container, NavItem } from "react-bootstrap";
import { ListForm } from "./components/ListForm";
import { ListArea } from "./components/ListArea";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState([]);
  const [ids, setIds] = useState([]);

  const getTheData = (task) => {
    setFormValue([...formValue, task]);
  };

  const switchTask = (id, type) => {
    // console.log(id, type);
    const switchedArgs = formValue.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    // console.log(switchedArgs);
    setFormValue(switchedArgs);
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
          toDelete.push(item.id);
        }
      });
      if (checked) {
        setIds([...ids, ...toDelete]);
      } else {
        const tempArgs = ids.filter((id) => !toDelete.includes(id));
        setIds(tempArgs);
      }
      return;
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
        />
      </Container>
    </div>
  );
}

export default App;
