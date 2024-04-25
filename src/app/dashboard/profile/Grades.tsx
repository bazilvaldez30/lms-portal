"use client";

import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export default function Grades() {
  // Dummy data for five subjects
  const subjectsData = [
    {
      key: "1",
      subject: "Math",
      firstGrading: 85,
      secondGrading: 90,
      thirdGrading: 88,
      fourthGrading: 92,
    },
    {
      key: "2",
      subject: "Science",
      firstGrading: 78,
      secondGrading: 82,
      thirdGrading: 80,
      fourthGrading: 85,
    },
    {
      key: "3",
      subject: "English",
      firstGrading: 90,
      secondGrading: 88,
      thirdGrading: 85,
      fourthGrading: 92,
    },
    {
      key: "4",
      subject: "History",
      firstGrading: 82,
      secondGrading: 85,
      thirdGrading: 80,
      fourthGrading: 88,
    },
    {
      key: "5",
      subject: "Art",
      firstGrading: 88,
      secondGrading: 85,
      thirdGrading: 90,
      fourthGrading: 86,
    },
  ];

  // Columns configuration for Ant Design Table
  const columns: ColumnsType = [
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: 150,
    },
    {
      title: "First Grading",
      dataIndex: "firstGrading",
      key: "firstGrading",
      width: 150,
    },
    {
      title: "Second Grading",
      dataIndex: "secondGrading",
      key: "secondGrading",
      width: 150,
    },
    {
      title: "Third Grading",
      dataIndex: "thirdGrading",
      key: "thirdGrading",
      width: 150,
    },
    {
      title: "Fourth Grading",
      dataIndex: "fourthGrading",
      key: "fourthGrading",
      width: 150,
    },
    {
      title: "Average",
      dataIndex: "average",
      key: "average",
      width: 150,
      render: (text, record) => {
        const average =
          (record.firstGrading +
            record.secondGrading +
            record.thirdGrading +
            record.fourthGrading) /
          4;
        return average.toFixed(2);
      },
    },
  ];

  return (
    <section className="space-y-4">
      <div className="max-w-xs overflow-x-auto p-3 md:max-w-5xl">
        <h1 className="ps-3 text-lg md:ps-0">Grades</h1>
        <Table dataSource={subjectsData} columns={columns} pagination={false} />
      </div>
    </section>
  );
}
