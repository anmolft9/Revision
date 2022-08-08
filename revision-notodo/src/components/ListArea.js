import React from "react";
import { Row, Col } from "react-bootstrap";
import { ListTask } from "./ListTask";

export const ListArea = ({ formValue, switchTask, handleOnCheck, ids }) => {
  // console.log(formValue);
  const entryList = formValue.filter(({ type }) => type === "entry");
  const badList = formValue.filter(({ type }) => type === "bad");

  // console.log(entryList, badList);

  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-center mb-2">
          <h3>Entry List</h3>
        </div>
        <ListTask
          name="entry"
          arrow="right"
          list={entryList}
          switchTask={switchTask}
          handleOnCheck={handleOnCheck}
          ids={ids}
        />
      </Col>

      <Col>
        <div className="d-flex justify-content-center mb-2">
          <h3>Bad List</h3>
        </div>

        <ListTask
          name="bad"
          list={badList}
          switchTask={switchTask}
          handleOnCheck={handleOnCheck}
          ids={ids}
        />
      </Col>
    </Row>
  );
};
