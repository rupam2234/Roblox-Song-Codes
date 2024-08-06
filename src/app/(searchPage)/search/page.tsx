import { Metadata } from "next";
import Sidebar from "@/components/custom-components/sidebar";
import SearchHandler from "./SearchPageHandler";

export const metadata: Metadata = {
  title: "Matching IDs for your search on Roblox Song IDs",
  description: "These are the matching IDs for your search on Roblox Song IDs.",
};

const SearchPage = () => {
  return (
    <main className="my-9">
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
          <SearchHandler />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
