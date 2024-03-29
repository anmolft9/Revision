import React from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const ListTask = ({
  list = [],
  switchTask,
  arrow,
  handleOnCheck,
  name,
  ids,
}) => {
  // console.log(list);
  // console.log(formValue);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            <Form.Check type="checkbox" onChange={handleOnCheck} value={name} />
          </th>
          <th>Task</th>
          <th>Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  value={item._id}
                  checked={ids.includes(item._id)}
                  onChange={handleOnCheck}
                />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>

              <td>
                {arrow === "right" ? (
                  <Button onClick={() => switchTask(item._id, "bad")}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                ) : (
                  <Button onClick={() => switchTask(item._id, "entry")}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </Button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
