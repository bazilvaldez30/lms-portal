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
    <main>
      <Sidebar />
      <div className="p-4 lg:ml-64">
        <div className="rounded-lg  border-gray-200 px-4 dark:border-gray-700">
          <DashboardMainHeader pageTitle={pageTitle || ""} />
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
