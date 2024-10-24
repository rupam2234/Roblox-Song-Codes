// app/track/page.tsx

import React from "react";
import TrackPageTest from "./testServerSide";
import { Metadata } from "next";

interface TrackProps {
  searchParams: {
    id: string;
    name: string;
  };
}

// Function to generate metadata for the page
export async function generateMetadata({
  searchParams,
}: TrackProps): Promise<Metadata> {
  const { id, name } = searchParams;

  let songData = null;

  if (id) {
    try {
      // Construct the API URL using the server's origin
      const protocol = window.location.protocol === "https:" ? "https" : "http";
      const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000"; // Change based on your deployment

      const url = new URL(`/api/getTrack`, `${protocol}://${host}`);
      url.searchParams.append("id", id);
      url.searchParams.append("name", name || "");

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        songData = await response.json();
      } else {
        console.error("Failed to fetch track details");
      }
    } catch (error) {
      console.error("Error fetching track details:", error);
    }
  }

  // Default fallback if no songData is available
  const songName = songData?.name || "Unknown Song";
  const title = `${songName} - Roblox Music ID For Boombox`;
  const description = `This page contains the Roblox music code for ${songName} that you can use play it on the Boombox player. Just copy the code from here and try it on Boombox.`;

  return {
    title: title,
    description: description,
  };
}

const Track = async ({ searchParams }: TrackProps) => {
  const { id, name } = searchParams;

  let songData = null;

  if (id) {
    try {
      // Construct the API URL using the server's origin
      const protocol = "http"; // or 'https' if you're deploying with SSL
      const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000"; // Change based on your deployment

      const url = new URL(`/api/getTrack`, `${protocol}://${host}`);
      url.searchParams.append("id", id);
      url.searchParams.append("name", name || ""); // Optional, if you want to include name

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        songData = await response.json();
      } else {
        console.error("Failed to fetch track details");
      }
    } catch (error) {
      console.error("Error fetching track details:", error);
    }
  }

  return (
    <>
      <TrackPageTest initialSongData={songData} />
    </>
  );
};

export default Track;
