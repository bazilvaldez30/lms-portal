import React from "react";

export default function Enrollment() {
  return (
    <div className=" flex grid auto-rows-[150px] gap-5 lg:grid-cols-12 ">
      <div className="order-0 row-span-1 flex  flex-col rounded-xl border border-solid px-5 py-4 lg:col-span-4">
        <p className=" mb-4 text-lg font-bold text-gray-500">Programs</p>
        <form action="">
          <label
            htmlFor=""
            className="mb-3 block text-sm font-semibold text-black"
          >
            Choose program
          </label>
          <select className="form-input">
            <option value="">Select Program</option>
          </select>
        </form>
      </div>
      <div className=" order-3 row-span-4 rounded-xl border border-solid px-5 py-4 lg:order-2 lg:col-span-8">
        <p className="mb-4 text-lg font-bold text-gray-500">How to enroll</p>
      </div>
      <div className=" order-2 row-span-3 rounded-xl border border-solid px-5 py-4 lg:order-3 lg:col-span-4">
        <p className="mb-4 text-lg font-bold text-gray-500">
          Upload Requirements
        </p>
        <div className="flex flex-col gap-5">
          <form action="" className="flex flex-col">
            <label
              htmlFor=""
              className="mb-3 block text-sm font-semibold text-black "
            >
              Birthcertificate
            </label>
            <input type="file" className="form-input" />
            <button className="button-primary mt-3 rounded-lg bg-red-800 md:text-[10px]">
              UPLOAD
            </button>
          </form>
          <form action="" className="flex flex-col">
            <label
              htmlFor=""
              className="mb-3 block text-sm font-semibold text-black"
            >
              Form-137
            </label>
            <input type="file" className="form-input" />
            <button className="button-primary mt-3 rounded-lg bg-red-800 md:text-[10px]">
              UPLOAD
            </button>
          </form>
          <form action="" className="flex flex-col">
            <label
              htmlFor=""
              className="mb-3 block text-sm font-semibold text-black"
            >
              ID/Picture
            </label>
            <input type="file" className="form-input" />
            <button className="button-primary mt-3 rounded-lg bg-red-800 md:text-[10px]">
              UPLOAD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
