"use client";

import { SongIDs } from "@/components/custom-components/constants";
import { useEffect, useState } from "react";

// type fetchSongProps = {
//   apiEndpoint: string;
// };

export default function Test() {
  const [data, setData] = useState<SongIDs[]>([]);

  const duration = 90; // 1.30 minute long
  const apiEndpoint: string = "/api/songIdbyLimit";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`${apiEndpoint}?duration=${duration}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result: SongIDs[] = await response.json();
          setData(result);
        }
      } catch (error) {
        console.info("Error fetching data: ", error);
      }
    };

    fetchdata();
  }, [apiEndpoint, duration]);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <p className="mb-8">List of song codes to publish:</p>
          <ul className="terms-list space-y-3 text-[16px]">
            {data.map((song, index) => (
              <li key={song.id} className="flex space-x-4">
                <p className="flex flex-row gap-1">
                  <span>{song.name}</span>
                  {"("}
                  <span>{song.artist}</span>
                  {") - "}
                  <span>{song.id}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
