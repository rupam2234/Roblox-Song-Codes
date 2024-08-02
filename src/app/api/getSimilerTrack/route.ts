// src/app/api/songs/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
import { SongIDs } from '@/components/custom-components/constants';

export async function GET(req: NextRequest) {
  // Extract query parameters
  const url = new URL(req.url);
  const name = url.searchParams.get("name");

  // Ensure name is provided
  if (!name) {
    return NextResponse.json({ error: "Name parameter is required" }, { status: 400 });
  }

  try {
    // Using parameterized query
    const { rows } = await sql<SongIDs[]>`
      SELECT name, id, ratings, genres, duration 
      FROM assets 
      WHERE name LIKE ${`%${name}%`}
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
