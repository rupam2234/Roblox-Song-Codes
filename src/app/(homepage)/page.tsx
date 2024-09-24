import { Metadata } from "next";
import TopContent from "./topcontent";
import BottomContents from "./bottomContent";
import Sidebar from "@/components/custom-components/sidebar";
import FeaturedBox from "../../components/custom-components/featuredBox";
import { getFormattedDate } from "@/components/utils/date";
import HandleCategories from "./handleCategories";
import HomapageSchema from "@/components/SchemaHandler/homaPageSchema";

export const metadata: Metadata = {
  title: "Roblox Song Codes - Largest Working Boombox Song ID Database",
  description:
    "This curated collection of Roblox music codes features pre-tested and fully functional song IDs. We update the database monthly with the latest codes directly from Roblox.",
  keywords: [
    "Best Roblox Song Codes",
    "Roblox Music Codes",
    "Song Codes for Boombox",
    "Music ID for Boombox",
  ],
  publisher: "GeekGuidez",
  openGraph: {
    title: "Roblox Song Codes - Largest Working Boombox Song ID Database",
    description:
      "This curated collection of Roblox music codes features pre-tested and fully functional song IDs. We update the database monthly with the latest codes directly from Roblox.",
    siteName: "Geek Guidez",
    images: "/media/Working Roblox Song Codes.png",
  },
};

const HomePage = () => {
  const formattedDate = getFormattedDate();

  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Roblox Song Codes - Largest Working Boombox Song ID Database`}
          descriptionText1={
            "This is a complete list of all tested Roblox song codes across different genres that you can play on Boombox. We consistently update and filter this database to provide you with song IDs that work."
          }
          descriptionText2={
            "Our algorithm actively searches for new music codes and seamlessly updates the list. We also automatically remove codes that have been deleted or are no longer available. This means you can trust that all the codes listed below will work with your boombox."
          }
          image="/media/Roblox-Boombox-Icon.png"
          altText={"Best Boombox Music IDs"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center">
          <HomapageSchema
            Headline={`Best Roblox Song Codes For Boombox (Working in ${formattedDate})`}
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
