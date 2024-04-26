import React from "react";
import { CgGirl } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { TbTools } from "react-icons/tb";
import CommunityTable from "./registrar/community-table";

export default function DashboardConntent() {
  return (
    <div>
      <div className="mb-4 grid grid-cols-4 gap-4 md:gap-12 ">
        <div className="dark:bg-gray-803 mx-auto flex h-28  w-full items-center justify-center rounded-md bg-custom-9 px-3 text-custom-8">
          <CgGirl className="me-3 h-12 w-12" />
          <div className="flex flex-col items-center justify-center gap-1 border-s px-3 py-3">
            <span className="text-sm">Number of Students</span>
            <h1 className="text-3xl font-bold">500</h1>
          </div>
        </div>
        <div className="dark:bg-gray-803 mx-auto flex h-28  w-full items-center justify-center rounded-md bg-custom-3 px-2 text-custom-8">
          <GiTeacher className="me-3 h-12 w-12" />
          <div className="flex flex-col items-center justify-center gap-1 border-s px-3 py-3">
            <span className="text-sm">Number of Teachers</span>
            <h1 className="text-3xl font-bold">11</h1>
          </div>
        </div>
        <div className="dark:bg-gray-803 mx-auto flex h-28  w-full items-center justify-center rounded-md bg-custom-2 px-2 text-custom-8">
          <GrUserWorker className="me-3 h-12 w-12" />
          <div className="flex flex-col items-center justify-center gap-1 border-s px-3 py-3">
            <span className="text-sm">Number of Employee</span>
            <h1 className="text-3xl font-bold">18</h1>
          </div>
        </div>
        <div className="dark:bg-gray-803 mx-auto flex h-28  w-full items-center justify-center rounded-md bg-custom-6 px-2 text-custom-8">
          <TbTools className="me-3 h-12 w-12" />
          <div className="flex flex-col items-center justify-center gap-1 border-s px-3 py-3">
            <span className="text-sm">Number of Equipment</span>
            <h1 className="text-3xl font-bold">2013</h1>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4 ">
        <div className="dark:bg-gray-803 col-span-4 mx-auto flex w-full items-center justify-center rounded-md bg-custom-9 px-3 text-custom-8">
          qwe
        </div>
        <div className="dark:bg-gray-803 col-span-8 mx-auto flex w-full items-center justify-center rounded-md  px-3 text-custom-8">
          <CommunityTable />
        </div>
      </div>
    </div>
  );
}
