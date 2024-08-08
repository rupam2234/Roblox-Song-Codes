"use client";

import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
import { Button } from "../ui/button";
import {
  FaFacebook,
  FaFacebookF,
  FaPinterest,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { LucideFacebook } from "lucide-react";

const cute = Dancing_Script({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Share = () => {
  const title = "Roblox Song Codes | Tested Boombox Music IDs";

  const [Url, setUrl] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);

      let queryString = "";
      if (queryParams.toString()) {
        // Only generate queryString if there are query parameters
        queryString = queryParams.toString();
      } else {
        queryString = "";
      }

      const fullUrl = `${window.location.origin}${pathname}${
        queryString ? `?${queryString}` : ""
      }`;
      setUrl(fullUrl);
    }
  }, [pathname]);

  return (
    <div className="flex w-full my-10 mx-[15px]">
      <div
        className={cn(
          "text-gray-400 text-[20px] mr-4 flex justify-center items-center",
          cute.className
        )}
      >
        Share this page:
      </div>
      <div className="flex gap-3">
        <FacebookShareButton
          url={Url}
          title={title}
          hashtag="Roblox Song Codes"
        >
          <div className="rounded-full bg-[#3B5998] hover:bg-transparent text-white hover:text-black p-3 border">
            <FaFacebookF className="w-4 h-4" />
          </div>
        </FacebookShareButton>

        <RedditShareButton url={Url} title={title}>
          <div className="rounded-full bg-[#FF4500] hover:bg-transparent text-white hover:text-[#FF4500] p-3 border">
            <FaReddit className="w-4 h-4" />
          </div>
        </RedditShareButton>
        <TwitterShareButton
          url={Url}
          title={title}
          hashtags={["Roblox", "SongIDs", "Boombox"]}
          related={["@GeekGuidez"]}
        >
          <div className="group rounded-full bg-[#1DA1F2] hover:bg-transparent p-3 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current text-white group-hover:text-black transition-colors duration-200"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
        </TwitterShareButton>
        <PinterestShareButton
          url={Url}
          title={title}
          description="This is a complete list of tested Roblox song codes across different genres that you can play on Boombox and are WORKING!"
          pinId=""
          media="/_next/image?url=%2Fmedia%2FRoblox-Boombox-Icon.png&w=384&q=75"
        >
          <div className="rounded-full bg-[#E60023] hover:bg-transparent text-white hover:text-[#E60023] p-3 border">
            <FaPinterest className="w-4 h-4" />
          </div>
        </PinterestShareButton>
      </div>
    </div>
  );
};

export default Share;
