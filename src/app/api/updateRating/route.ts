// src/app/api/updateRating/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  const { id, newRating } = await req.json();

  try {
    await sql`UPDATE assets SET ratings = ${newRating} WHERE id = ${id}`;
    return NextResponse.json({ message: "Rating updated successfully" });
  } catch (error) {
    console.error("Error updating rating:", error);
    return NextResponse.error();
  }
}
