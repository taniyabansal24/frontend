// src/proxy.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      "token"
    )?.value;

  const {
    pathname,
  } = request.nextUrl;

  // Protected routes
  const protectedRoutes = [
    "/dashboard",
  ];

  // Auth routes
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  // User not logged in
  if (
    protectedRoutes.some(
      (route) =>
        pathname.startsWith(
          route
        )
    ) &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );
  }

  // User already logged in
  if (
    authRoutes.some(
      (route) =>
        pathname.startsWith(
          route
        )
    ) &&
    token
  ) {
    return NextResponse.redirect(
      new URL(
        "/dashboard",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
};