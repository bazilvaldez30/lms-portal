"use client";

import Link from "next/link";
import React, { useState } from "react";
import SidenavMenuButton from "./sidenav-menu-button";
import { cn } from "../../lib/helpers";
import { dashboardNavData } from "../../lib/datas";
import CloseIcon from "@mui/icons-material/Close";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAppSelector, useAuth, useGetPathName } from "../../lib/hooks";

export default function Sidebar() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const { url } = useGetPathName();
  const { handleLogout } = useAuth();
  return (
    <>
      <SidenavMenuButton setIsOpen={setIsOpen} />
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 bg-custom-9 transition-transform duration-700 sm:-translate-x-full lg:translate-x-0 xl:w-64",
          {
            "-translate-x-full": !isOpen,
          },
        )}
      >
        <div className="h-full overflow-y-auto bg-custom-9 px-3 py-4 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>

            {/* Hide close button in large devices */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="button-primary block bg-custom-9 text-black md:hidden"
            >
              <CloseIcon className="h-7 w-7 fill-custom-2 hover:fill-custom-5" />
            </button>
          </div>

          {/* Map navmenu */}
          <ul className="space-y-2 text-xl font-medium md:text-lg">
            {dashboardNavData.map((item) => {
              // Hide item if user is not logged in or user does not have the required role
              const shouldHide = !user?.roles
                ? false
                : user !== null &&
                  user !== undefined &&
                  item.roles.some((role) => user.roles.includes(role));

              return (
                <li key={item.title} hidden={shouldHide}>
                  <Link
                    className={cn(
                      "group mx-auto flex items-center rounded-lg p-2 text-white hover:bg-custom-1",
                      {
                        "bg-custom-1": url === item.link,
                      },
                    )}
                    href={item.link}
                  >
                    {item.icon}
                    <span className="ms-3">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={handleLogout}
                className={cn(
                  "group mx-auto me-auto flex w-full items-center rounded-lg p-2 text-white hover:bg-custom-1",
                )}
              >
                <RiLogoutCircleRLine className="h-6 w-6" />
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
