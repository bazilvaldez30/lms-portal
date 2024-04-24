import React from "react";
import DashboardLayout from "../dashboard-layout";
import Enrollment from "./enrollment";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Enrollment">
      <Enrollment />
    </DashboardLayout>
  );
}
