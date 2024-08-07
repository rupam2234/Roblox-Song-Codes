"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ComponentType, useState } from "react";
import FetchSongs from "./(datatable)/fetchSongData";

const HandleCategories = () => {
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(0);

  type tagTypes = {
    tagName: string;
    icon: ComponentType;
  };

  const tags: tagTypes[] = [
    {
      tagName: "Metal",
      icon: Check,
    },
    {
      tagName: "Electronic",
      icon: Check,
    },
    {
      tagName: "Holiday",
      icon: Check,
    },
    {
      tagName: "Beats",
      icon: Check,
    },
    {
      tagName: "Funk",
      icon: Check,
    },
    {
      tagName: "Classical",
      icon: Check,
    },
    {
      tagName: "Folk",
      icon: Check,
    },
  ];

  const handleClick = (index: number) => {
    setSelectedTagIndex(index);
  };

  return (
    <>
      <div className="flex space-x-3 mt-7">
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
          apiEndpoint={`/api/songs?genre=${tags[selectedTagIndex].tagName}`}
        />
      )}
    </>
  );
};

export default HandleCategories;
