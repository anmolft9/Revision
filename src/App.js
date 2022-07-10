import "./App.css";

import { Container } from "react-bootstrap";
import { ListForm } from "./components/ListForm";
import { ListArea } from "./components/ListArea";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState([]);

  const getTheData = (task) => {
    setFormValue([...formValue, task]);
  };

  const switchTask = (id, name) => {
    console.log(id, name);
    // const switchedArgs = formValue.map();
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
