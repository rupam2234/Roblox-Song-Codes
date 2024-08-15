import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { UserRatings } from "@/components/custom-components/constants";

export async function GET(req: NextRequest) {
  // Retrieve query parameters from the URL
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // Ensure id is provided
  if (!id) {
    return NextResponse.json(
      { error: "id parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Function to map query result to UserRatings type
    const mapToUserRatings = (rows: any[]): UserRatings[] => {
      return rows.map((row) => ({
        total_rating: row.total_rating,
        rating_number: row.rating_number,
      }));
    };

    const result = await sql<UserRatings[]>`
      SELECT total_rating, rating_number 
      FROM toolrating 
      WHERE id = ${id};
    `;
    const rows = mapToUserRatings(result.rows);

    // If no rows are found, return an empty response or a not found status
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "No ratings found for the provided id" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ...rows[0] });
  } catch (error) {
    console.error("Error fetching ratings:", error);
    return NextResponse.error();
  }
}
