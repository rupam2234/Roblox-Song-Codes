import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);
  const genre = url.searchParams.get("genre");

  // Ensure genre is provided
  if (!genre) {
    return NextResponse.json(
      { error: "Genre parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Using parameterized query to fetch data from the "vibes" table based on the genre
    const { rows } = await sql<SongIDs[]>`
      SELECT name, id, ratings, genres, duration 
      FROM vibes 
      WHERE genres = ${genre}
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
