import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";
import { getFormattedDate } from "@/components/utils/date";
import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";

export const metadata: Metadata = {
  title: "Popular Song Codes For Boombox",
  description:
    "We have filtered highest rated tracks by users to find the coolest songs to play on Boombox.",
};

const PolularTracks = () => {
  const formattedDate = getFormattedDate();

  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Popular Boombox Music Codes (${formattedDate})`}
          descriptionText1={
            "This comprehensive collection includes a complete list of tested Roblox song codes from a wide range of popular genres. We've filtered the higested 'USER RATED' trending songs to offer you the absolute best song IDs for your Boombox experience."
          }
          descriptionText2={
            "Our database is consistently updated, regularly removing outdated codes and adding fresh new ones. You can confidently rely on these carefully curated codes to always work flawlessly with your Boombox."
          }
          image="/media/Roblox-Boombox-Icon.png"
          altText={"Roblox-Boombox-Ico"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          <p>
            We have put together a list of one hundred popular songs from our
            Roblox Audio Database. These songs have been rated by users, which
            means that many people have enjoyed playing them on their Boombox
            players.
          </p>
          <p>
            Each song in this list has been selected based on positive feedback
            and high ratings from the community, ensuring you get to enjoy some
            of the most loved tracks.
          </p>
          <p>
            You can pick a song ID by coping it and have a good time playing it
            on Boombox. Or you can search if your favorite music is in this list
            using the search bar and start playing on boombox player with the
            music ID.
          </p>
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
