"use client";

import { Check } from "lucide-react";
import TableDropdownMenu, {
  tagTypes,
} from "@/components/custom-components/tableNavigationHandler";

const HandleVibes = () => {
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
    {
      tagName: "Suspenseful",
      icon: Check,
    },
    {
      tagName: "Smooth listening",
      icon: Check,
    },
    {
      tagName: "Scary",
      icon: Check,
    },
  ];

  return (
    <div>
      <TableDropdownMenu tags={tags} songAPIAddress={"vibeTrack"} />
    </div>
  );
};

export default HandleVibes;
