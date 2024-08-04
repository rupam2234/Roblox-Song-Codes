import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs, DBRow } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  // Ensure ID is provided
  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch data from the database
    const { rows } = await sql<DBRow>`
      SELECT name, id, ratings, genres, duration, artist, update_date 
      FROM assets 
      WHERE id = ${id}`;

    // Format the update_date field and map to SongIDs
    const formattedRows: SongIDs[] = rows.map((row) => {
      const updatedDate = new Date(row.update_date); // Convert the update_date to a Date object
      const formattedDate = updatedDate.toLocaleDateString("en-US", {
        month: "short", // Format month as a short string
        day: "2-digit", // Format day as two digits
        year: "numeric", // Format year as a numeric value
      });

      // Return a new object with updated field
      return {
        name: row.name,
        id: row.id,
        ratings: row.ratings,
        genres: row.genres,
        duration: row.duration,
        artist: row.artist,
        updated: formattedDate, // Map the formatted date to the updated field
      };
    });

    return NextResponse.json(formattedRows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
