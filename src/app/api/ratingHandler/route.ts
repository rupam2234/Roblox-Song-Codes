import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  const { id, selectedValue } = await req.json();
  try {
    await sql`
      UPDATE toolrating 
      SET total_rating = total_rating + ${selectedValue}, 
          rating_number = rating_number + 1 
      WHERE id = ${id};
    `;
    return NextResponse.json({ message: "Rating updated successfully" });
  } catch (error) {
    console.error("Error updating rating:", error);
    return NextResponse.error();
  }
}
