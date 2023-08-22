import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const { host, pathname } = request.nextUrl;
  const isPublicPath = pathname === "/login" || pathname === "/signup";
  const isLoggedIn =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("token")?.value ||
    "";
  const loginAuthorPath = pathname === "/admin/login" || pathname === "/admin";
  const authorPath =
    pathname === "/courses/addCourse" || pathname === "/courses/editCourse";
  const isAdmin = request.cookies.get("admin-token")?.value || "";

  const isBuyPath = pathname === "/buy/(.*)";

  if (isBuyPath && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (!isAdmin && authorPath) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  if (isAdmin && loginAuthorPath) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (isLoggedIn && isPublicPath) {
    return NextResponse.redirect(new URL("/me", request.nextUrl));
  }

  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/me",
    "/me/(.*)",
    "/login",
    "/admin",
    "/admin/(.*)",
    "/signup",
    "/logout",
    "/buy/(.*)",
    "/courses/addCourse",
    "/courses/editCourse",
  ],
};
