"use client";

import { IDCount } from "@/app/api/counter/route";
import { useEffect, useState } from "react";

const CountSongID = () => {
  const [idCount, setIdcount] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/counter`);

        if (response.ok) {
          const data: IDCount = await response.json();
          setIdcount(data.count);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div className="mx-[13px] bg-gray-800 rounded-sm px-4 py-2 my-5 text-[15px] hidden md:block text-gray-100  border-l-[1px] border-gray-300">
      Featured Song IDs:{" "}
      <span className="text-orange-400 font-semibold">{idCount}</span>
    </div>
  );
};

export default CountSongID;
