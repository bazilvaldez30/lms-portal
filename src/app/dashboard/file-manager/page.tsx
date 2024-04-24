import React from "react";
import DashboardLayout from "../dashboard-layout";
import FileManager from "./file-manager";

export default function Page() {
  return (
    <DashboardLayout pageTitle="File Manager">
      <FileManager />
    </DashboardLayout>
  );
}
