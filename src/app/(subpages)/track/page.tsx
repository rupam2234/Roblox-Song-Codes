import React from "react";
import { SongIDs } from "@/components/custom-components/constants";
import TrackPageTest from "./trackPage";
import { Metadata } from "next";

interface TrackProps {
  searchParams: {
    id: string;
    name: string;
  };
}

// Use Metadata export
export async function generateMetadata({
  searchParams,
}: TrackProps): Promise<Metadata> {
  const { id, name } = searchParams;

  let songData: SongIDs[] = [];

  if (id) {
    try {
      const protocol = process.env.NEXT_PUBLIC_VERCEL_URL ? "https" : "http";
      const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";
      const url = new URL(`/api/getTrack`, `${protocol}://${host}`);
      url.searchParams.append("id", id);
      if (name) {
        url.searchParams.append("name", name);
      }

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        songData = await response.json();
        const songName = songData[0]?.name || "Unknown Song";
        const title = `${songName} - Roblox Music ID For Boombox`;
        const description = `This page contains the Roblox music code for ${songName} that you can use to play it on the Boombox player. Just copy the code from here and try it on Boombox.`;

        return { title, description };
      }
    } catch (error) {
      console.error("Error fetching track details:", error);
    }
  }

  // Default metadata in case of failure
  return {
    title: "Default Title",
    description: "Default Description",
  };
}

// Fetching the song data directly inside the Track component
const Track = async ({ searchParams }: TrackProps) => {
  const { id } = searchParams;

  let songData: SongIDs[] = [];

  if (id) {
    try {
      const protocol = process.env.NEXT_PUBLIC_VERCEL_URL ? "https" : "http";
      const host = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";
      const url = new URL(`/api/getTrack`, `${protocol}://${host}`);
      url.searchParams.append("id", id);

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
    <main>
      <TrackPageTest initialSongData={songData} />
    </main>
  );
};

// Export the component as default
export default Track;
