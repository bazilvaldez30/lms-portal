import React from "react";
import Sidebar from "./sidebar";
import DashboardMain from "./dashboard-main";
import SidenavMenuButton from "./sidenav-menu-button";

export default function Page() {
  return (
    <div>
      <Sidebar />
      <DashboardMain />
    </div>
  );
}
