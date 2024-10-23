import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import { GlobalYear, inter } from "../layout";
import { cn } from "@/lib/utils";

const TopContent = () => {
  return (
    <>
      <div className="text-[17px] text-gray-600 space-y-5">
        <h1
          className={cn(
            "text-[18px] text-[#5F8C81] font-bold md:font-bold md:text-[27px]",
            inter.className
          )}
        >
          {`Roblox Song Codes: Groove with the Best Tunes`}
        </h1>{" "}
        <p>
          Here&apos;s a list of Roblox song codes from various genres that you
          can play on Boombox. The site regularly updates and filters working
          codes to ensure you always have access to currently valid song IDs.
        </p>
        <p>
          It constantly searches for new music IDs, tests it and adds them to
          the database as long as they&apos;re working. Additionally, each
          month, the site automatically removes IDs that no longer work to keep
          things updated.
        </p>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How to find a song ID?
        </h2>
        <p>
          To find your favorite song IDs you can either use the global or table
          search bar. Enter the music name you&apos;re looking for, and the
          table will find you a list of matching music IDs. From there, you can
          copy the song ID and play on Boombox.
        </p>
        <p>
          Alternatively you can find roblox song ids from these customized
          lists:{" "}
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
          , or more codes can be found on the{" "}
          <a className="text-blue-700 hover:text-blue-400" href="/blog">
            blog
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
