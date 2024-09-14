import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // domain redirect
  if (url.hostname === "roblox.geekguidez.com") {
    url.hostname = "robloxsongcodes.com";
    return NextResponse.redirect(url)
  }

  // Check if the URL is exactly /track without query parameters
  if (url.pathname === "/track" && url.search === "") {
    url.pathname = "/popular-tracks";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
