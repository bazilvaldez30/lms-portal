"use client";

import { fetchUsers, generateColumns } from "@/lib/helpers";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function CommunityTable() {
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["community"],
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
  columns.push({
    title: "Actions",
    key: "actions",
    width: 200,
    fixed: "right",
    render: (record: any) => (
      <div className="flex gap-3">
        <button className="button-primary m-0 bg-white p-0 hover:scale-125">
          <FaEye className="icon text-black" />
        </button>
        <button className="button-primary m-0 bg-white p-0 hover:scale-125">
          <FiEdit className="icon text-blue-600" />
        </button>
        <button className="button-primary m-0 bg-white p-0 hover:scale-125">
          <RiDeleteBin5Line className="icon text-red-600" />
        </button>
      </div>
    ),
  });
  console.log(data);

  return (
    <section className="w-full space-y-4 border px-4 py-6 text-black">
      <h1 className="ps-3 text-lg font-semibold md:ps-0">Community Table</h1>
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
