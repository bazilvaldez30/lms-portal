import React from "react";
import DashboardLayout from "../dashboard-layout";
import Registrar from "./registrar";

export default function Page() {
  return (
    <DashboardLayout pageTitle="Registrar">
      <Registrar />
    </DashboardLayout>
  );
}
