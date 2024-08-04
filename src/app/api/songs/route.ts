// src/app/api/songs/route.ts
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SongIDs } from "@/components/custom-components/constants";

export async function GET() {
  try {
    const { rows } = await sql<
      SongIDs[]
    >`SELECT name, id, ratings, genres, duration FROM assets`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
