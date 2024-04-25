"use client";

import { fetchCourses, generateColumns } from "@/lib/helpers";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import React from "react";
import { useQuery } from "react-query";

export default function CoursesTable() {
  const { data, isLoading, isError, error } = useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const columnOrder = ["id", "name", "description"];
  const columns: TableColumnsType = generateColumns(data, columnOrder);

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <h1 className="ps-3 text-lg font-semibold md:ps-0">Courses Table</h1>
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          columns={columns}
          dataSource={data?.map((item) => ({
            ...item,
            key: item.id,
          }))}
          loading={isLoading}
          pagination={false}
          bordered
        />
      </div>
    </section>
  );
}
