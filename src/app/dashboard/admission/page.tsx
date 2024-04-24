import React from "react";
import DashboardLayout from "../dashboard-layout";
import Admission from "./profile";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Admission">
      <Admission />
    </DashboardLayout>
  );
}
