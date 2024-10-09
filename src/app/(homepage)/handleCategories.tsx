"use client";

import { Check } from "lucide-react";
import TableDropdownMenu, {
  tagTypes,
} from "@/components/custom-components/tableNavigationHandler";

const HandleCategories = () => {
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
    {
      tagName: "Lofi",
      icon: Check,
    },
    {
      tagName: "Pop",
      icon: Check,
    },
    {
      tagName: "Hip-hop",
      icon: Check,
    },
  ];

  return (
    <>
      <div>
        <TableDropdownMenu tags={tags} songAPIAddress={"songs"} />
      </div>
      <p className="text-sm text-gray-600 my-4">
        <strong className="text-[#FA8900]">Tip:</strong> if you can&apos;t find
        your track, try searching on the site header. It searches our entire
        track database instead of searching in a category spacific table.
      </p>
    </>
  );
};

export default HandleCategories;
