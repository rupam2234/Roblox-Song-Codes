import FeaturedBox from "@/components/custom-components/featuredBox";
import { getFormattedDate } from "@/components/utils/date";
import Sidebar from "@/components/custom-components/sidebar";
import HandleVibes from "./handleVibes";
import { Metadata } from "next";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";

export const metadata: Metadata = {
  title: "Roblox Song Codes By Vibes",
  description: "Largest Roblox Music Code Database Categoried by Vibes",
};

const VibeCategories = () => {
  const formattedDate = getFormattedDate();

  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Boombox Music Codes Categorized by Vibes (Updated on ${formattedDate})`}
          descriptionText1={
            "This is a collection of music IDs categoried based on Vibes. We have handpicked some of the best tracks from the database to provide you with tracks that are longer than atleast 30 seconds an gives you the vibe as you busy playing Roblox games."
          }
          descriptionText2={
            "You can choose a category from the tags below, and each category will show you a table with song IDs for that category. We can display songs from one category at a time."
          }
          image="/media/Roblox-Boombox-Icon.png"
          altText={"Boombox Music Codes"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          <FirstInContentAd/>
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
