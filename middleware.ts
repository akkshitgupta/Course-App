import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const { host, pathname } = request.nextUrl;
  const isPublicPath = pathname === "/login" || pathname === "/signup";
  const isLoggedIn =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("token")?.value ||
    "";

  const authorPath =
    pathname === "/courses/addCourse" || pathname === "/courses/editCourse";
  const isAdmin = request.cookies.get("admin-token")?.value || "";

  if ((!isAdmin || !isLoggedIn) && authorPath) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
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
