import React from "react";
import Table from "react-bootstrap/Table";
import { MEM_TYPE } from "../constants/constants";

export default function ItemListComponent({ itemList }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Date</th>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item, index = 0) => (
          <tr key={index++}>
            <td>{index}</td>
            <td>{MEM_TYPE[item.type]}</td>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>
              <a href={item.url}>link</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
