import React from "react";
import Sidebar from "./sidebar";
import DashboardLayout from "./dashboard-layout";
import DashboardConntent from "./dashboard-content";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <DashboardConntent />
    </DashboardLayout>
  );
}
