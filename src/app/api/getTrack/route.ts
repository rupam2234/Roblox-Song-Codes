import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs } from "@/components/custom-components/constants";

// Handle GET request
export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  // Ensure ID is provided
  if (!id) {
    return NextResponse.json({ error: "ID parameter is required" }, { status: 400 });
  }

  try {
    const { rows } =
      await sql<SongIDs>`SELECT name, id, ratings, genres, duration FROM assets WHERE id = ${id}`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
