import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the URL is exactly /track without query parameters
  if (url.pathname === "/track" && url.search === "") {
    url.pathname = "/popular-tracks";
    return NextResponse.redirect(url);
  }

  // Check if the URL is /track with query parameters
  if (url.pathname === "/track" && url.search) {
    const trackId = url.searchParams.get("id");

    if (trackId) {
      const response = await fetch(
        `${request.nextUrl.origin}/api/isTrackExist?id=${trackId}`
      );

      if (response.ok) {
        const { exists } = await response.json();

        if (!exists) {
          url.pathname = "/";
          return NextResponse.redirect(new URL("/", request.url));
        } else {
          // do nothing / means stay on page
        }
      } else {
        console.error("Error fetching track existence:", response.statusText);
        return NextResponse.json(
          { error: "Error checking track existence" },
          { status: 500 }
        );
      }
    }
  }

  return NextResponse.next();
}
