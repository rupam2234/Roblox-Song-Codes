import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the URL is exactly /track without query parameters
  if (url.pathname === "/track" && url.search === "") {
    url.pathname = "/popular-tracks";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
