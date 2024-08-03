import { Metadata } from "next";
import TopContent from "./topcontent";
import FetchSongs from "./(datatable)/fetchSongData";
import BottomContents from "./bottomContent";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/custom-components/sidebar";

export const metadata: Metadata = {
  title: "Roblox Song Codes For Boombox",
  description: "Largest Roblox Music Code Database",
};

const nato = Fira_Sans({
  subsets: ["latin"],
  weight: "800",
  preload: true,
});

const HomePage = () => {
  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <div className="w-full px-7 py-10 border rounded-md my-3 bg-gradient-to-br from-[#5F8C81] to-[#337c86]">
          <h1
            className={cn(
              "text-[18px] text-white md:font-medium md:text-[32px]",
              nato.className
            )}
          >
            Roblox Song Codes - Largest Boombox Music Database
          </h1>
          <div className="flex gap-10 justify-center items-center mt-7 md:mt-0">
            <div className="text-[16px] text-white space-y-5">
              <p>
                This is a complete list of all tested Roblox song codes across
                different genres that you can play on Boombox. We consistently
                update and filter this database to provide you with song IDs
                that work.
              </p>
              <p>
                Our algorithm actively searches for new music codes and
                seamlessly updates the list. We also automatically remove codes
                that have been deleted or are no longer available. This means
                you can trust that all the codes listed below will work with
                your boombox.
              </p>
            </div>
            <div className="hidden md:flex m-10">
              <Image
                src="/media/Roblox-Boombox-Icon.png"
                width={375}
                height={375}
                alt="Roblox-Boombox-Song-Codes"
                className="zoom-on-hover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center">
          <TopContent />
          <FetchSongs apiEndpoint={"/api/songs"} />
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
