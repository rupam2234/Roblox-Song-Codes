"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa";

export default function Breadcrumbs() {
  const location = usePathname();

  let currentLink = "";

  // Split the path and filter out empty segments
  const crumbs = location.split("/").filter((crumb) => crumb !== "");

  return (
    <div className="breadcrumbs flex text-slate-600 items-center justify-center md:justify-start text-[13px]">
      <Link href="/" className="crumb text-red-600 font-semibold">
        Home
      </Link>
      {crumbs.map((crumb, index) => {
        currentLink += `/${crumb}`;

        return (
          <div key={crumb} className="flex items-center">
            {/* Render the separator slash between crumbs */}
            <span className="mx-2">/</span>
            <p className="crumb">
              {crumb
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </p>
          </div>
        );
      })}
    </div>
  );
}
