import React from "react";
import Sidebar from "./sidebar";
import DashboardMainHeader from "./dashboard-main-header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const DashboardLayout: React.FC<Readonly<DashboardLayoutProps>> = ({
  children,
  pageTitle,
}) => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 px-4 dark:border-gray-700">
          <DashboardMainHeader pageTitle={pageTitle || ""} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
