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
  ];

  return (
    <div>
      <TableDropdownMenu tags={tags} />
    </div>
  );
};

export default HandleCategories;
