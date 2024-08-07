"use client";

import { ComponentType, useState } from "react";
import { Button } from "../ui/button";
import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";

export type tagTypes = {
  tagName: string;
  icon: ComponentType;
};

interface TableDropdownMenuProps {
  tags: tagTypes[];
}

const TableDropdownMenu: React.FC<TableDropdownMenuProps> = ({ tags }) => {
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = (index: number) => {
    setSelectedTagIndex(index);
  };

  return (
    <div className="relative mt-7">
      <Button
        size="sm"
        variant="outline"
        className="flex items-center text-gray-500 px-5 gap-2 mb-3"
        onClick={toggleDropdown}
      >
        Select Genre
      </Button>
      {dropdownOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-2 w-full max-w-52 z-50">
          <div className="flex flex-col">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`flex items-center text-gray-500 px-4 py-2 gap-2 hover:bg-[#EDF2ED] text-[15px] cursor-pointer border border-gray-100 ${
                  selectedTagIndex === index ? "bg-[#EDF2ED]" : ""
                }`}
                onClick={() => {
                  handleClick(index);
                  setDropdownOpen(false);
                }}
              >
                {selectedTagIndex === index && <tag.icon />}
                {tag.tagName}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* FetchSongs Component with dynamic API endpoint */}
      {selectedTagIndex !== null && (
        <FetchSongs
          apiEndpoint={`/api/songs?genre=${tags[selectedTagIndex].tagName}`}
        />
      )}
    </div>
  );
};

export default TableDropdownMenu;
