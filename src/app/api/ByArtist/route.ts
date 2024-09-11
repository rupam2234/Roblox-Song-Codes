import { SongIDs } from "@/components/custom-components/constants";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // extract query perameters
  const url = new URL(req.url);
  const artist = url.searchParams.get("artist");

  if (!artist) {
    return NextResponse.json(
      { error: "Genre parameer is missing" },
      { status: 404 }
    );
  }

  try {
    const { rows } = await sql<
      SongIDs[]
    >`SELECT name, id, ratings, genres, duration FROM assets WHERE artist = ${artist}`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching database:", error);
    return NextResponse.error();
  }
}
