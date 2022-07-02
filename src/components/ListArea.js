import React from "react";
import { Row, Col } from "react-bootstrap";
import { ListTask } from "./ListTask";

export const ListArea = () => {
  return (
    <Row>
      <Col>
        <ListTask />
      </Col>
      <Col>
        <ListTask />
      </Col>
    </Row>
  );
};
