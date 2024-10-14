import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import { GlobalYear, inter } from "../layout";
import { cn } from "@/lib/utils";

const TopContent = () => {
  return (
    <>
      <div className="text-[17px] text-gray-600 space-y-5">
        <h1
          className={cn(
            "text-[18px] text-[#5F8C81] md:font-bold md:text-[25px]",
            inter.className
          )}
        >
          {`Largest Roblox Song Codes Database For Boombox [${GlobalYear}]`}
        </h1>{" "}
        <p>
          This is a list of tested Roblox song codes across different genres you
          can play on Boombox. The site consistently updates and filters this
          database to provide you with song IDs that work.
        </p>
        <p>
          The algorithm actively searches for new music codes and if it finds a
          working code updates the list immediately. Of course song IDs that no
          longer works are automatically removed.
        </p>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How to find a song ID?
        </h2>
        <p>
          To find your favorite song IDs use the search bar. Enter the music
          name you’re looking for, and the table will show you a list of
          matching music IDs. From there, you can copy the Song code and play on
          Boombox.
        </p>
        <p>
          Alternatively you can pick roblox song id from these lists:{" "}
          <a
            className="text-blue-700 hover:text-blue-400"
            href="/popular-tracks"
          >
            most popular tracks
          </a>
          <span className="mx-1">and</span>
          <a className="text-blue-700 hover:text-blue-400" href="/vibes">
            filtered by vibes
          </a>
          .
        </p>
        <div className="my-3 items-center justify-center">
          <FirstInContentAd />
        </div>
      </div>
    </>
  );
};

export default TopContent;
