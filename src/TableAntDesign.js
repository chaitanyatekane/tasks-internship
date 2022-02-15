import React from "react";
// import "ant/dist/antd.css";
import { Table, Button } from "antd";
import { useState } from "react";

const TableAntDesign = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Chaitanya",
      email: "chaitanya@gmail.com",
      address: "b5-bhenda",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      address: "b3-mumbai",
    },
    {
      id: 3,
      name: "Virat",
      email: "virat@gmail.com",
      address: "d2-pune",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "4",
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };

  return (
    <div className="tableAntDesign">
      <header className="tableAntDesignHeader">
        <Button onClick={onAddStudent}>Add New Member</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
};

export default TableAntDesign;
