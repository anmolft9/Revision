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

  // console.log(formValue);
  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <ListForm getTheData={getTheData} />

        {/* here goes the list area */}
        <ListArea formValue={formValue} />
      </Container>
    </div>
  );
}

export default App;
