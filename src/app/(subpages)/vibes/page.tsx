import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import HandleVibes from "./handleVibes";
import { Metadata } from "next";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import { cn } from "@/lib/utils";
import { GlobalYear, inter } from "@/app/layout";

export const metadata: Metadata = {
  title: "Roblox Song Codes By Vibes",
  description: "Largest Roblox Music Code Database Categoried by Vibes",
  publisher: "Roblox Song Codes",
};

const VibeCategories = () => {
  return (
    <main>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 mt-8 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          <h1
            className={cn(
              "text-[18px] text-[#5F8C81] md:font-bold md:text-[25px]",
              inter.className
            )}
          >
            {`Boombox Music IDs Categorized by Vibes (Updated on ${GlobalYear})`}
          </h1>{" "}
          <p>
            This is a collection of music IDs categorized based on Vibes. This
            list consist of tracks that are longer than at least 30 seconds and
            lets you match the vibe you want in your game.
          </p>
          <p>
            Use the dropdown menu below and choose a category from the list.
            Each category will show you an unique table with song IDs that you
            can easily pick and play.
          </p>
          <FirstInContentAd />
          <HandleVibes />
          <p>
            To access the full database of working Roblox song codes, go to the{" "}
            <a
              href="/"
              className="text-blue-500 hover:text-blue-400 cursor-pointer"
            >
              homepage
            </a>
            .
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default VibeCategories;
