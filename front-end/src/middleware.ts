import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isSessionExpired = session?.expires
    ? new Date(session.expires) < new Date()
    : true;

  const isAuthenticated = session?.user && !isSessionExpired;
  const { pathname } = request.nextUrl;

  if (isAuthenticated && ["/signin", "/signup", "/"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isAuthenticated && ["/", "/dashboard"].includes(pathname)) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  const token = request.cookies.get("authjs.session-token")?.value;

  if (token) {
    request.headers.set("Authorization", `Bearer ${token}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/signin", "/signup"],
};
