import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);

  const duration = url.searchParams.get("duration");

  // Check if no valid parameters are provided
  if (!duration) {
    return NextResponse.json(
      { error: "At least one parameter must be provided" },
      { status: 400 }
    );
  } else {
    try {
      const { rows } = await sql<SongIDs[]>`
        SELECT name, id, ratings, genres, duration, artist 
        FROM assets 
        WHERE duration >= ${duration} 
        LIMIT 300;
        `;
      return NextResponse.json(rows);
    } catch (error) {
      console.error("Error fetching data: ", error);
      return NextResponse.error();
    }
  }
}
