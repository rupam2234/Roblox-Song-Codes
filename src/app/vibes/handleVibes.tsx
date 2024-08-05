"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ComponentType, useState } from "react";
import FetchSongs from "../(homepage)/(datatable)/fetchSongData";

const HandleVibes = () => {
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(0);

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
    <>
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
    </>
  );
};

export default HandleVibes;
