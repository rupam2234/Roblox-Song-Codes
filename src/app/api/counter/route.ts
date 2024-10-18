// src/app/api/counter/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  try {
    const { rows } = await sql`SELECT COUNT(*) AS count FROM assets;`;
    const count = rows[0]?.count || 0; // Get the count or default to 0
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
