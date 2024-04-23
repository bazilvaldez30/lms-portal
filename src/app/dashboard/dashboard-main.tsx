import React from "react";
import DashboardMainHeader from "./dashboard-main-header";

export default function DashboardMain() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg border-2 border-dashed border-gray-200 px-4 dark:border-gray-700">
        <DashboardMainHeader />
        <div className="bg-custom-2">MAIN CONTENT</div>
      </div>
    </div>
  );
}
