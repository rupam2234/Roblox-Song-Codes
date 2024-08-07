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
  ];


  return (
    <div>
      <TableDropdownMenu tags={tags} />
    </div>
  );
};

export default HandleVibes;
