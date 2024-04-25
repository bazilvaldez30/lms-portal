import { NextResponse, type NextRequest } from "next/server";
import React from "react";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("refresh");
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;

  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  /* if (path !== "/login" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } */

  return response;
}

/* export const config = {
  matcher: ["/dashboard/:path*", "/login", "/registration"],
}; */
