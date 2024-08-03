import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const cute = Dancing_Script({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Share = () => {
  const Url = window.location.href;
  const title = "Roblox Song Codes | Tested Boombox Music IDs";

  return (
    <div className="flex mt-6 ml-[15px]">
      <div
        className={cn(
          "text-gray-400 text-[20px] mr-4 flex justify-center items-center",
          cute.className
        )}
      >
        Share us:
      </div>
      <div className="flex gap-3">
        <FacebookShareButton
          url={Url}
          title={title}
          hashtag="Roblox Song Codes"
          className="hover:animate-pulse"
        >
          <FacebookIcon size={35} round />
        </FacebookShareButton>

        <RedditShareButton
          url={Url}
          title={title}
          className="hover:animate-pulse"
        >
          <RedditIcon size={35} round />
        </RedditShareButton>
        <TwitterShareButton
          url={Url}
          title={title}
          className="hover:animate-pulse"
          hashtags={["Roblox", "SongIDs", "Boombox"]}
          related={["@GeekGuidez"]}
        >
          <TwitterIcon size={35} round />
        </TwitterShareButton>
        <PinterestShareButton
          url={Url}
          title={title}
          description="This is a complete list of tested Roblox song codes across different genres that you can play on Boombox and are WORKING!"
          pinId=""
          media="/_next/image?url=%2Fmedia%2FRoblox-Boombox-Icon.png&w=384&q=75"
          className="hover:animate-pulse"
        >
          <PinterestIcon size={35} round />
        </PinterestShareButton>
      </div>
    </div>
  );
};

export default Share;
