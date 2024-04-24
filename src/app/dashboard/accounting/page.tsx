import React from "react";
import DashboardLayout from "../dashboard-layout";
import Accounting from "./accounting";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Accounting">
      <Accounting />
    </DashboardLayout>
  );
}
