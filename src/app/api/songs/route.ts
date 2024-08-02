import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { SongIDs } from "@/components/custom-components/constants";

const CHUNK_SIZE = 50; // Number of rows to fetch per request

export async function GET(req: Request) {
  try {
    // Parse query parameters
    const url = new URL(req.url);
    const start = parseInt(url.searchParams.get("start") || "0", 10);

    // Fetch data in chunks
    const { rows } = await sql<SongIDs[]>`
      SELECT name, id, ratings, genres, duration
      FROM assets
      ORDER BY id
      LIMIT ${CHUNK_SIZE}
      OFFSET ${start}
    `;

    // Check if there are more rows to fetch
    const moreDataAvailable = rows.length === CHUNK_SIZE;

    return NextResponse.json({
      rows,
      moreDataAvailable,
      nextStart: moreDataAvailable ? start + CHUNK_SIZE : null,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
