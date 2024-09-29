"use client";

import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import { SongIDs } from "@/components/custom-components/constants";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

type fetchSongProps = {
  apiEndpoint: string;
};

const HandleList = ({ apiEndpoint }: fetchSongProps) => {
  const [data, setData] = useState<SongIDs[]>([]);

  // we want to fetch songs that are longer than 1.30 minutes
  const duration = 90;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //endpoint design = /api/ByArtist?duration=${duration}
        const response = await fetch(`${apiEndpoint}?duration=${duration}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result: SongIDs[] = await response.json();
          setData(result);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    // Call the fetch function
    fetchData();

    // re-run whenever these values changes
  }, [apiEndpoint, duration]);

  function formatNameForURL(name: string) {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/['"]/g, "") // Remove apostrophes and quotes
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove any characters that aren't letters, numbers, or hyphens
  }

  return (
    <div>
      {data.length > 0 ? (
        <ul className="space-y-3 terms-list text-[13px] md:text-[14px] lg:text-[15px]">
          {data.map((song, index) => (
            <React.Fragment key={song.id}>
              <li>
                <p>
                  <Link
                    href={`/track?id=${song.id}&name=${formatNameForURL(
                      song.name
                    )}`}
                    className="hover:text-orange-500 text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{song.name}</strong>
                  </Link>{" "}
                  - <span style={{ display: "inline-block" }}>{song.id}</span> -
                  ({song.artist})
                </p>
              </li>
              {/* Insert the ad after every 100th item without a bullet point */}
              {(index + 1) % 100 === 0 && (
                <li className="list-none">
                  <FirstInContentAd />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <div className="py-2 px-4 gap-2 bg-slate-100 flex rounded-md items-center">
          loading
          <Loader2Icon className="h-5 w-5 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default HandleList;
