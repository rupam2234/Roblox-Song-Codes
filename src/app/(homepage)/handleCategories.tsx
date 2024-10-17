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
    {
      tagName: "Rap",
      icon: Check,
    },
    {
      tagName: "Acoustic",
      icon: Check,
    },
    {
      tagName: "Indie",
      icon: Check,
    },
    {
      tagName: "Rock",
      icon: Check,
    },
    {
      tagName: "Rhythm",
      icon: Check,
    },
  ];

  return (
    <>
      <div>
        <TableDropdownMenu tags={tags} songAPIAddress={"songs"} />
      </div>
    </>
  );
};

export default HandleCategories;
