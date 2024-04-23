"use client";

import Link from "next/link";
import React from "react";
import { navmenuData } from "../shared/datas";
import {
  useNavbarScroll,
  useGetPathName,
  useAppSelector,
  useLogout,
} from "../shared/hooks";
import { cn } from "../shared/helpers";

export default function Navbar() {
  const { isScrolled } = useNavbarScroll();
  const { url } = useGetPathName();
  const { user } = useAppSelector((state) => state.user);
  const { handleLogout } = useLogout();
  return (
    <nav
      hidden={url === "/login"}
      className={cn(
        `sticky top-0 z-50 w-full transform border-gray-300 bg-custom-1 px-6 py-5 text-custom-8 transition-all duration-500`,
        {
          "bg-custom-3": isScrolled,
        },
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex space-x-4">
          <Link className="text-4xl font-extrabold" href="/">
            OLAS
          </Link>
        </div>
        <div className={`hidden gap-[2vw] text-[18px] md:flex`}>
          {navmenuData.map((item) => (
            <Link
              key={item.name}
              className="menu-item-primary"
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 md:me-[3vw]">
          {user ? (
            <button
              onClick={handleLogout}
              className="button-primary rounded-full bg-custom-2"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              className="button-primary rounded-full bg-custom-2"
              href="/login"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
