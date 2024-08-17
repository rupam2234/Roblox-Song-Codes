"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        // Build the URL for the current crumb
        const crumbLink = `/${crumbs.slice(0, index + 1).join("/")}`;

        return (
          <div key={crumb} className="flex items-center">
            {/* Render the separator slash between crumbs */}
            <span className="mx-2">/</span>
            <Link href={crumbLink} className="crumb text-[#5F8C81]">
              {crumb
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
