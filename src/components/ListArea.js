import React from "react";
import { Row, Col } from "react-bootstrap";
import { ListTask } from "./ListTask";

export const ListArea = ({ formValue, switchTask }) => {
  const entryList = formValue.filter(({ type }) => type === "entry");
  const badList = formValue.filter(({ type }) => type === "bad");

  return (
    <Row>
      <Col>
        <ListTask name="entry" list={entryList} switchTask={switchTask} />
      </Col>
      <Col>
        <ListTask name="bad" list={badList} switchTask={switchTask} />
      </Col>
    </Row>
  );
};
