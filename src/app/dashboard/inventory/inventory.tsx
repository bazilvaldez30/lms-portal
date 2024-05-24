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
import AssetForm from "./assset-form";
import { useAssets } from "@/lib/hooks";

export default function Inventory() {
  const { deleteAssetMutation } = useAssets();

  const { data, isLoading, isError, error } = useQuery<Asset[], Error>({
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
    render: (record: Asset) => (
      <div className="flex gap-3">
        <button className="button-primary m-0 bg-white p-0 hover:scale-125">
          <FaEye className="icon text-black" />
        </button>

        <AssetForm record={record} />

        <button className="button-primary m-0 bg-white p-0 hover:scale-125">
          <RiDeleteBin5Line
            onClick={async () => await deleteAssetMutation(record.id)}
            className="icon text-red-600"
          />
        </button>
      </div>
    ),
  });

  console.log(data);

  return (
    <section className="w-full space-y-4 border px-4 py-6">
      <AssetForm />
      <div className="mx-auto overflow-x-auto md:max-w-6xl">
        <Table
          dataSource={data?.map((item) => ({
            ...item,
            key: item.id,
          }))}
          columns={columns}
          pagination={false}
        />
      </div>
    </section>
  );
}
