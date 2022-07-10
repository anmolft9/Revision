import React from "react";
import { Row, Col } from "react-bootstrap";
import { ListTask } from "./ListTask";

export const ListArea = ({ formValue }) => {
  return (
    <Row>
      <Col>
        <ListTask name="entry" formValue={formValue} />
      </Col>
      <Col>
        <ListTask name="bad" formValue={formValue} />
      </Col>
    </Row>
  );
};
