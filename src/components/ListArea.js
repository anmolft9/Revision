import React from "react";
import { Row, Col } from "react-bootstrap";
import { ListTask } from "./ListTask";

export const ListArea = ({ formValue }) => {
  return (
    <Row>
      <Col>
        <ListTask formValue={formValue} />
      </Col>
      <Col>
        <ListTask formValue={formValue} />
      </Col>
    </Row>
  );
};
