import React from "react";
import DashboardLayout from "../dashboard-layout";
import Admin from "./admin";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Admin">
      <Admin />
    </DashboardLayout>
  );
}
