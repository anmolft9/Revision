import React from "react";
import Table from "react-bootstrap/Table";

export const ListTask = ({ formValue }) => {
  console.log(formValue);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>{formValue.type}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};
