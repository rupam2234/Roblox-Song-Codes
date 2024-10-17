import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";
import { getFormattedDate } from "@/components/utils/date";
import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import { GlobalYear, inter } from "@/app/layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Popular Song Codes For Boombox (Working in ${GlobalYear})`,
  description:
    "This comprehensive collection includes a complete list of tested Roblox song codes from a wide range of popular genres. We've filtered the highest 'USER RATED' trending songs to offer you the absolute best song IDs for your Boombox experience.",
  publisher: "RobloxSongCodes.com",
};

const PolularTracks = () => {
  return (
    <main>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 mt-8 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          <h1
            className={cn(
              "text-[18px] text-[#5F8C81] font-bold md:font-bold md:text-[25px]",
              inter.className
            )}
          >
            {`Popular Song Codes For Boombox (Working in ${GlobalYear})`}
          </h1>{" "}
          <p>
            I&apos;ve put together this list of one hundred popular songs from
            the Roblox Audio Database. These are some of the highest rated songs
            by the users, means they are the most liked Roblox song IDs we have
            on this site.
          </p>
          <p>
            You can copy a song ID and have a good time playing it. Or you can
            search your favorite music using the global or table search bar and
            start playing them on boombox player.
          </p>
          <FirstInContentAd />
          <FetchSongs apiEndpoint={"/api/popularTrack"} />
          <p>
            In case you are looking for tracks that aren&apos;t in this list,
            try looking into the{" "}
            <a
              href="/"
              className="text-blue-500 hover:text-blue-400 cursor-pointer"
            >
              full Boombox music database
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
export default PolularTracks;
