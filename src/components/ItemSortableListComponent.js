import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { MEM_TYPE } from "../constants/constants";
import "./ItemListComponent.css";

export default function ItemSortableListComponent({ itemList }) {
  const titleFormatter = (data, row) => {
    return (
      <a href="" target="_blank">
        {data}
      </a>
    );
  };

  const typeFormatter = (data, row) => {
    return <div className={MEM_TYPE[data]}>{MEM_TYPE[data]}</div>;
  };

  const columns = [
    {
      dataField: "type",
      text: "Type",
      sort: true,
      formatter: typeFormatter,
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
    },
    {
      dataField: "title",
      text: "Title",
      formatter: titleFormatter,
    },
  ];
  return (
    <BootstrapTable
      keyField="id"
      data={itemList}
      columns={columns}
      striped
      hover
      condensed
      pagination={paginationFactory()}
    />
  );
}
