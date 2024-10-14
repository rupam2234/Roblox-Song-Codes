import { Metadata } from "next";
import TopContent from "./topcontent";
import BottomContents from "./bottomContent";
import Sidebar from "@/components/custom-components/sidebar";
import FeaturedBox from "../../components/custom-components/featuredBox";
import HandleCategories from "./handleCategories";
import HomapageSchema from "@/components/SchemaHandler/homaPageSchema";

const date = new Date();

const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();

export const metadata: Metadata = {
  title: `Roblox Song Codes - Boombox Song ID database (${month} ${year})`,
  description:
    "This is a collection of Roblox song codes that are currently working. The database is consistently updated to with the latest public Song IDs from creator's hub.",
  keywords: [
    "Best Roblox Song Codes",
    "Roblox Music Codes",
    "Song Codes for Boombox",
    "Music ID for Boombox",
    "Updated Roblox song codes",
    "Roblox Boombox music IDs",
    `popular Roblox music codes ${year} `,
  ],
  publisher: "RobloxSongCodes.com",
  openGraph: {
    title: `Roblox song codes - Boombox Song ID database (${month} ${year})`,
    description:
      "This is a collection of Roblox song codes that are currently working. The database is consistently updated to with the latest public Song IDs from creator's hub.",
    siteName: "Roblox Song Codes",
    images: "/media/Working Roblox Song Codes.png",
  },
};

const HomePage = () => {
  return (
    <main>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 mt-8 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center">
          <HomapageSchema
            Headline={`All Roblox Song Codes & Working Song IDs (${month} ${year})`}
            PageUrl={"/"}
            PageAbout={
              "This is a complete list of all tested Roblox song codes across different genres that you can play on Boombox. We consistently update and filter this database to provide you with song IDs that work."
            }
            AuthorName={""}
            PageName={""}
          />
          <TopContent />
          <HandleCategories />
          <BottomContents />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
