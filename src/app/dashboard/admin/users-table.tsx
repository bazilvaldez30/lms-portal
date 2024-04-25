"use client";

import { fetchUsers, generateColumns } from "@/lib/helpers";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import React, { Suspense } from "react";
import { useQuery } from "react-query";

export default function UsersTable() {
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const columnOrder = [
    "lastName",
    "firstName",
    "email",
    "isActive",
    "isSuperuser",
  ];
  const columns: TableColumnsType = generateColumns(data, columnOrder);

  console.log(data);

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <h1 className="ps-3 text-lg font-semibold md:ps-0">Users Table</h1>
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          columns={columns}
          dataSource={data?.map((item) => ({
            ...item,
            key: item.email,
          }))}
          loading={isLoading}
          pagination={false}
        />
      </div>
    </section>
  );
}
