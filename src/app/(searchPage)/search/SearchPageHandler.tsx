"use client";

import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const SearchResults = () => {
  const [searchString, setSearchString] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("SongName") || "";
    setSearchString(queryParam);
  }, [searchParams]);

  return (
    <div>
      <div className="px-4 py-7 bg-slate-100 text-[14px] text-center space-y-5">
        <p>You searched for &quot;{searchString}&quot;</p>
        <p>Here are few matching song IDs we found in our database.</p>
      </div>
      <FetchSongs
        apiEndpoint={`/api/searchApi?SongName=${encodeURIComponent(
          searchString
        )}`}
      />
    </div>
  );
};

const SearchPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchResults />
  </Suspense>
);

export default SearchPage;
