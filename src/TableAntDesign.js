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
    {
      id: 4,
      name: "Dhawan",
      email: "dhawan@gmail.com",
      address: "c4-bhenda",
    },
    {
      id: 5,
      name: "Bravo",
      email: "bravo@gmail.com",
      address: "d1-pune",
    },
    {
      id: 6,
      name: "Rohan",
      email: "rohan@gmail.com",
      address: "e4-newasa",
    },
    {
      id: 7,
      name: "Abhay",
      email: "abhay@gmail.com",
      address: "w2-pune",
    },
    {
      id: 8,
      name: "Kiran",
      email: "kiran@gmail.com",
      address: "d2-mumbai",
    },
    {
      id: 9,
      name: "Anand",
      email: "anand@gmail.com",
      address: "c2-pune",
    },
    {
      id: 10,
      name: "Amit",
      email: "amit@gmail.com",
      address: "r4-shevgaon",
    },
    {
      id: 11,
      name: "Sakshi",
      email: "sakshi@gmail.com",
      address: "b2-mumbai",
    },
    {
      id: 12,
      name: "Amruta",
      email: "amruta@gmail.com",
      address: "a1-kopargaon",
    },
    {
      id: 13,
      name: "Vaishnavi",
      email: "vaishnavi@gmail.com",
      address: "b7-bhenda",
    },
    {
      id: 14,
      name: "Rajnandani",
      email: "rajnandani@gmail.com",
      address: "c2-pune",
    },
    {
      id: 15,
      name: "Anushka",
      email: "anushka@gmail.com",
      address: "f3-mumbai",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "4",
      width: "30%",
    },
    {
      key: "5",
      title: "Actions",
      width: "20%",
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
        <Button
          type="primary"
          style={{
            marginBottom: "35px",
            paddingBottom: "10px",
            fontWeight: "bolder",
          }}
          onClick={onAddStudent}
        >
          Add New Member
        </Button>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5, position: "bottomCenter" }}
          scroll={{ y: 240 }}
        ></Table>
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
