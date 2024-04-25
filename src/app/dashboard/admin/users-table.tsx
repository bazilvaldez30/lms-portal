"use client";

import { fetchUsers } from "@/lib/helpers";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import React from "react";
import { useQuery } from "react-query";

export default function UsersTable() {
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const columns: TableColumnsType = [
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      width: 150,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      width: 150,
      render: (isActive: boolean) => (isActive ? "Yes" : "No"),
    },
    {
      title: "Superuser",
      dataIndex: "isSuperuser",
      key: "isSuperuser",
      width: 150,
      render: (isSuperuser: boolean) => (isSuperuser ? "Yes" : "No"),
    },
  ];

  console.log(data);

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <h1 className="ps-3 text-lg md:ps-0">Users Table</h1>
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          columns={columns}
          dataSource={data?.map((item) => ({
            ...item,
            key: item.email,
          }))}
          pagination={false}
        />
      </div>
    </section>
  );
}
