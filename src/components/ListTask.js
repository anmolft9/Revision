import React from "react";
import Table from "react-bootstrap/Table";

export const ListTask = ({ list = [] }) => {
  // console.log(formValue);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Task</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr>
              <td>{item.tasks}</td>
              <td>{item.hrs}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
