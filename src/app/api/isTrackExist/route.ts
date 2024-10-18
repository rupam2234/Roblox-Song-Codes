// src/app/api/songs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  // extract query parameters
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id parameter is missing" },
      { status: 400 }
    );
  }

  try {
    // Check if the ID exists in the assets table
    const { rows } =
      await sql`SELECT EXISTS (SELECT 1 FROM assets WHERE id = ${id}) AS exists;`;

    // Get the existence flag from the query result
    const exists = rows[0]?.exists;

    return NextResponse.json({ exists });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
