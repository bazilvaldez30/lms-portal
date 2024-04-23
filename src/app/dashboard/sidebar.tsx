"use client";

import Link from "next/link";
import React, { useState } from "react";
import SidenavMenuButton from "./sidenav-menu-button";
import { cn } from "../shared/helpers";
import { dashboardNavData } from "../shared/datas";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidenavMenuButton setIsOpen={setIsOpen} />
      <aside
        className={cn(
          "bg-custom-9 fixed left-0 top-0 z-40 h-screen w-full transition-transform duration-700 sm:translate-x-0 md:w-64",
          {
            "-translate-x-full": !isOpen,
          },
        )}
      >
        <div className="bg-custom-9 h-full overflow-y-auto px-3 py-4 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>

            {/* Hide close button in large devices */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="button-primary text-black md:hidden"
            >
              <CloseIcon className="h-7 w-7 fill-custom-2" />
            </button>
          </div>

          {/* Map navmenu */}
          <ul className="space-y-2 text-xl font-medium md:text-lg">
            {dashboardNavData.map((item) => (
              <li key={item.title}>
                <Link
                  className="group mx-auto flex items-center rounded-lg p-2 text-white hover:bg-custom-1"
                  href={item.link}
                >
                  {item.icon}
                  <span className="ms-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
