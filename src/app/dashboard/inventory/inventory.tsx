"use client";

import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { fetchAssets, generateColumns } from "@/lib/helpers";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useQuery } from "react-query";

export default function Inventory() {
  const { data, isLoading, isError, error } = useQuery<Assets[], Error>({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  const columnOrder = [
    "serialNumber",
    "name",
    "description",
    "borrower",
    "borrowedAt",
    "status",
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

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <button className="button-primary mb-5 ms-auto rounded-lg bg-custom-1 px-8 py-3 pe-6">
        Add Asset <FaPlus className="text-xl" />
      </button>
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          dataSource={data?.map((item) => ({
            ...item,
            key: item.serialNumber,
          }))}
          columns={columns}
          pagination={false}
        />
      </div>
    </section>
  );
}
