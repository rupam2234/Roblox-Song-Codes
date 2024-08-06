// src/app/api/songs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // extract query perameters
  const url = new URL(req.url);
  const genre = url.searchParams.get("genre");

  if (!genre) {
    return NextResponse.json(
      { error: "Genre parameer is missing" },
      { status: 400 }
    );
  }

  try {
    const { rows } = await sql<
      SongIDs[]
    >`SELECT name, id, ratings, genres, duration FROM assets WHERE genres = ${genre}`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
