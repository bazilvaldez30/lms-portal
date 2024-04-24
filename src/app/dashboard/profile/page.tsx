import React from "react";
import DashboardLayout from "../dashboard-layout";
import Profile from "./profile";

export default function Page() {
  return (
    <DashboardLayout pageTitle="My Profile">
      <Profile />
    </DashboardLayout>
  );
}
