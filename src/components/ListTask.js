import React from "react";
import Table from "react-bootstrap/Table";

export const ListTask = ({ formValue = [] }) => {
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
        {formValue.map((item) => {
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
