import React from "react";
import DashboardLayout from "../dashboard-layout";
import Inventory from "./inventory";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Inventory">
      <Inventory />
    </DashboardLayout>
  );
}
