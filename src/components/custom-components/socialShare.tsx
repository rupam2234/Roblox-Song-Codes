"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { usePathname, useSearchParams } from "next/navigation";

export default function SocialShare() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Construct the current URL
  const constructURl = `${window.location.origin}${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const url = constructURl.toString();

  return (
    <div className="flex gap-5 my-6 p-3 ml-4 items-center justify-start">
      <p>Share us: </p>
      <div className="hover:animate-ping">
        <FacebookShareButton
          url={url}
          quote={"🚀 Discover working roblox song codes to play on Boombox!"}
          hashtag={"#Roblox"}
        >
          <FacebookIcon size={42} round />
        </FacebookShareButton>
      </div>
      <div className="hover:animate-ping">
        <PinterestShareButton
          url={url}
          media={"/media/Roblox-Boombox-Icon.png"}
          title={"🚀 Discover working roblox song codes to play on Boombox!"}
          description={
            "This is a complete list of all tested Roblox song codes across different genres that you can play on Boombox."
          }
        >
          <PinterestIcon size={42} round />
        </PinterestShareButton>
      </div>
      <div className="hover:animate-ping">
        <TwitterShareButton
          url={url}
          title={"🚀 Discover working roblox song codes to play on Boombox!"}
          hashtags={["Roblox", "SongIDs", "Roblox_song-codes"]}
          via="GeekGuidez.com"
        >
          <TwitterIcon size={42} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}
