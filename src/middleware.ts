import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasAuthToken = request.cookies.has("authToken");
  const hasRegisterSuccess = request.cookies.has("isRegisterSuccess");
  const { pathname, origin } = request.nextUrl;

  // Bloquear acceso a /register/success sin la cookie de registro exitoso
  if (!hasRegisterSuccess && pathname === "/register/success") {
    return NextResponse.redirect(`${origin}/`);
  }

  // Proteger rutas del dashboard si no hay token
  if (!hasAuthToken && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(`${origin}/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/register/success"],
};
