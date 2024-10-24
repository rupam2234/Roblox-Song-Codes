import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Example function to fetch URLs from your database
async function fetchUrlsFromDatabase() {
  try {
    // Fetch all the id and name from the assets table
    const { rows } = await sql`
      SELECT id, name FROM assets;
    `;

    // Construct URLs based on the fetched data
    const urls = rows.map((row) => {
      const encodedName = encodeURIComponent(row.name.replace(/\s+/g, "-")); // Replace spaces with hyphens
      return `https://robloxsongcodes.com/track?id=${row.id}&name=${encodedName}`;
    });

    return urls; // Return the constructed URLs
  } catch (error) {
    console.error("Error fetching URLs from the database:", error);
    throw new Error("Failed to fetch URLs");
  }
}

// Helper function to split the array into chunks
function chunkArray(array: string | any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export async function POST(req: Request) {
  try {
    const urls = await fetchUrlsFromDatabase(); // Fetch all URLs dynamically

    // Split the URLs into batches of 5,000
    const urlBatches = chunkArray(urls, 5000);

    const apiKey =
      process.env.LOCAL_INDEXNOW_API_KEY || process.env.INDEXNOW_API_KEY;

    if (!apiKey) {
      throw new Error(
        "API key is missing. Please set LOCAL_INDEXNOW_API_KEY or INDEXNOW_API_KEY."
      );
    }

    const host = "www.robloxsongcodes.com"; // Change this to your actual host
    const keyLocation = `https://${host}/${apiKey}.txt`; // Adjust the key location as necessary

    // Loop over each batch of URLs and submit them
    for (const batch of urlBatches) {
      // Construct the payload for the API request
      const payload = {
        host: host,
        key: apiKey,
        keyLocation: keyLocation,
        urlList: batch, // Send this batch of URLs
      };

      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload), // Send the payload as a JSON string
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error during batch submission: ${errorText}`);
        return NextResponse.json(
          { error: `Batch submission failed: ${errorText}` },
          { status: response.status }
        );
      }
    }

    return NextResponse.json({
      message: "All URL batches submitted successfully!",
    });
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: "Failed to submit URLs" },
      { status: 500 }
    );
  }
}

// run this: curl -X POST http://localhost:3000/api/indexnow
