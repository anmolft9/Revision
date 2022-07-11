import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const ListTask = ({ list = [], switchTask, arrow }) => {
  // console.log(formValue);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Task</th>
          <th>Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr>
              <td>{item.tasks}</td>
              <td>{item.hrs}</td>

              <td>
                {arrow === "right" ? (
                  <Button onClick={() => switchTask(item.id, "bad")}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                ) : (
                  <Button onClick={() => switchTask(item.id, "entry")}>
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
