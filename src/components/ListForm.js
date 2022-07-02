import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";

export const ListForm = () => {
  return (
    <Form>
      <Row className="pt-5 mb-5">
        <Col>
          <Form.Control placeholder="Tasks" />
        </Col>
        <Col>
          <Form.Control placeholder="Hours" />
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
