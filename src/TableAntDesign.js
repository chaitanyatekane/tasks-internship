import React from "react";
import { Table, Button, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TableAntDesign = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
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
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => onEditStudent(record)} />
            <DeleteOutlined
              onClick={() => onDeleteStudent(record)}
              style={{ color: "red", marginLeft: 15 }}
            />
          </>
        );
      },
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

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div className="tableAntDesign">
      <header className="tableAntDesignHeader">
        <Button onClick={onAddStudent}>Add New Member</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          onText="Save"
          onCancel={() => resetEditing()}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
};

export default TableAntDesign;
