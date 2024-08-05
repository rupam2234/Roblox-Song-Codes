"use client";

import FeaturedBox from "@/components/custom-components/featuredBox";
import { getFormattedDate } from "@/components/utils/date";
import FetchSongs from "../(homepage)/(datatable)/fetchSongData";
import Sidebar from "@/components/custom-components/sidebar";
import { ComponentType, useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const VibeCategories = () => {
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(0);

  const formattedDate = getFormattedDate();

  type tagTypes = {
    tagName: string;
    icon: ComponentType;
  };

  const tags: tagTypes[] = [
    {
      tagName: "Exciting",
      icon: Check,
    },
    {
      tagName: "Chill",
      icon: Check,
    },
    {
      tagName: "Happy",
      icon: Check,
    },
  ];

  const handleClick = (index: number) => {
    setSelectedTagIndex(index);
  };

  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Boombox Music Codes Categorized by Vibes (Updated on ${formattedDate})`}
          descriptionText1={
            "This is a collection of music IDs categoried based on Vibes. We have handpicked some of the best tracks from the database to provide you with tracks that are longer than atleast 30 seconds an gives you the vibe as you busy playing Roblox games."
          }
          descriptionText2={
            "You can choose a category from the tags below, and each category will show you a table with song IDs for that category. We can display songs from one category at a time."
          }
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          <div className="flex space-x-3">
            {tags.map((tag, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                className="flex items-center text-gray-500 px-5 gap-2"
                onClick={() => handleClick(index)}
              >
                {selectedTagIndex === index && <tag.icon />}
                {tag.tagName}
              </Button>
            ))}
          </div>

          {/* FetchSongs Component with dynamic API endpoint */}
          {selectedTagIndex !== null && (
            <FetchSongs
              apiEndpoint={`/api/vibeTrack?genre=${tags[selectedTagIndex].tagName}`}
            />
          )}

          <p>
            In case you are looking for tracks that aren&apos;t in this list,
            try looking into the{" "}
            <a
              href="/"
              className="text-blue-500 hover:text-blue-400 cursor-pointer"
            >
              full Boombox music database
            </a>
            .
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default VibeCategories;
