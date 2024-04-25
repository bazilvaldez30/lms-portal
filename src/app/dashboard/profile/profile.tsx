import React from "react";
import About from "./About";
import Calendar from "./calendar";
import Timeline from "./timeline";

export default function Profile() {
  return (
    <main className="flex flex-col items-center">
      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800">
          <Timeline />
        </div>
        <div className="col-span-4 flex w-full items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800">
          <Calendar />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-4 flex  items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800">
          <About />
        </div>
        <div className="col-span-8 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
    </main>
  );
}
