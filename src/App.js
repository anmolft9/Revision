import "./App.css";

import { Container, NavItem } from "react-bootstrap";
import { ListForm } from "./components/ListForm";
import { ListArea } from "./components/ListArea";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState([]);

  const getTheData = (task) => {
    setFormValue([...formValue, task]);
  };

  const switchTask = (id, type) => {
    console.log(id, type);
    const switchedArgs = formValue.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    console.log(switchedArgs);
    setFormValue(switchedArgs);
  };

  // console.log(formValue);
  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <ListForm getTheData={getTheData} />

        {/* here goes the list area */}
        <ListArea formValue={formValue} switchTask={switchTask} />
      </Container>
    </div>
  );
}

export default App;
