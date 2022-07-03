import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const initialState = {
  tasks: "",
  hrs: "",
  type: "entry",
};

export const ListForm = ({ getTheData }) => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // console.log(form);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    getTheData({ ...form });
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="pt-5 mb-5">
        <Col>
          <Form.Control
            type="text"
            placeholder="Tasks"
            name="tasks"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Hours"
            name="hrs"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
