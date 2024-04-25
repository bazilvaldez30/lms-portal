"use client";

import { fetchSubjects } from "@/lib/helpers";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import React from "react";
import { useQuery } from "react-query";

export default function SubjectsTable() {
  const { data, isLoading, isError, error } = useQuery<Subject[], Error>({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const columns: TableColumnsType = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 150,
    },
  ];

  console.log(data);

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <h1 className="ps-3 text-lg md:ps-0">Subjects Table</h1>
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          columns={columns}
          dataSource={data?.map((item) => ({
            ...item,
            key: item.id,
          }))}
          pagination={false}
        />
      </div>
    </section>
  );
}
