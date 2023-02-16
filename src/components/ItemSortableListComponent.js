import React from "react";
import { default as BootstrapTable } from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { MEM_TYPE } from "../constants/constants";
import "./ItemListComponent.css";

export default function ItemSortableListComponent({ itemList }) {
  let rowIndex = 1;
  let rowTemp = null;
  const idFormatter = (data, row) => {
    if (rowTemp === null) {
      rowTemp = row;
      return <div>{rowIndex++}</div>;
    }
    if (row !== rowTemp) {
      console.log("not equals");
      rowTemp = row;
      return <div>{rowIndex++}</div>;
    }

    console.log(row);
    console.log(rowIndex);
  };

  const titleFormatter = (data, row) => {
    //console.log(row);
    return (
      <a href={row.url} target="_blank">
        {data}
      </a>
    );
  };

  const typeFormatter = (data, row) => {
    return <div className={MEM_TYPE[data]}>{MEM_TYPE[data]}</div>;
  };

  const columns = [
    {
      dataField: "id",
      text: "#",
      formatter: idFormatter,
    },
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
