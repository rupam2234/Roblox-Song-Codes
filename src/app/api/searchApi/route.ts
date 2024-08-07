import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { DBRow } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);
  const name = url.searchParams.get("SongName");

  // Ensure name is provided
  if (!name) {
    return NextResponse.json(
      { error: "Name parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Function to map query result to DBRow type
    const mapToDBRow = (rows: any[]): DBRow[] => {
      return rows.map((row) => ({
        id: row.id,
        name: row.name,
        ratings: row.ratings,
        genres: row.genres,
        duration: row.duration,
        artist: row.artist,
        update_date: row.update_date, // Correct field mapping
      }));
    };

    // Combined query to search in both tables
    const result = await sql<DBRow[]>`
      SELECT name, id, ratings, genres, duration, artist, update_date
      FROM assets
      WHERE name ILIKE ${`%${name}%`}
      UNION
      SELECT name, id, ratings, genres, duration, artist, update_date
      FROM vibes
      WHERE name ILIKE ${`%${name}%`}
    `;

    const rows = mapToDBRow(result.rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
