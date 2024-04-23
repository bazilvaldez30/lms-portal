import React from "react";
import SearchInput from "../components/search-input";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function DashboardMainHeader() {
  return (
    <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <h1 className="text-2xl font-semibold">My Profile</h1>
      <div className="flex justify-end gap-5">
        <SearchInput />
        <button className="bg-custom-10 rounded-full p-2">
          <NotificationsOutlinedIcon className="icon fill-custom-5" />
        </button>
      </div>
    </div>
  );
}
