import "./App.css";

import { Container } from "react-bootstrap";
import { ListForm } from "./components/ListForm";
import { ListArea } from "./components/ListArea";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <ListForm />

        {/* here goes the list area */}
        <ListArea />
      </Container>
    </div>
  );
}

export default App;
