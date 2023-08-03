import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const { host, pathname } = request.nextUrl;
  const isPublicPath = pathname === "/login" || pathname === "/signup";
  const isLoggedIn = request.cookies.get("token")?.value || "";

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
    "/admin/(.*)",
    "/signup",
    "/logout",
    "/buy/(.*)",
    "/courses/addCourse",
  ],
};
