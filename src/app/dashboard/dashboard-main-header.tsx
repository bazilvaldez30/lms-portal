import React from "react";
import SearchInput from "../../components/search-input";
import { FaRegBell, FaRegUser } from "react-icons/fa";

export default function DashboardMainHeader({
  pageTitle,
}: {
  readonly pageTitle: string;
}) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <h1 className="text-2xl font-semibold">{pageTitle}</h1>
      <div className="flex justify-end gap-4">
        <SearchInput />
        <button className="rounded-full bg-custom-10 p-2">
          <FaRegBell className="h-6 w-6 fill-custom-5" />
        </button>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-custom-7 p-2">
            <FaRegUser className="h-6 w-6 fill-custom-11" />
          </button>
          <div className="flex flex-col text-xs text-custom-11">
            <span>Zil</span>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
