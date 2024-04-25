import React from "react";
import Grades from "./grades";

import Calendar from "./calendar";
import Timeline from "./timeline";
import About from "./about";

export default function Profile() {
  return (
    <main className="flex w-full flex-col items-center">
      <div>
        <div className="mb-4 grid w-full grid-cols-12 gap-4">
          <div className="col-span-12 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 xl:col-span-8">
            <Timeline />
          </div>
          <div className="col-span-12 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 lg:col-span-6 xl:col-span-4">
            <Calendar />
          </div>
          <div className="col-span-12 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 lg:col-span-6 xl:col-span-4">
            <About />
          </div>
          <div className="col-span-12 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 xl:col-span-8">
            <Grades />
          </div>
        </div>
      </div>
    </main>
  );
}
