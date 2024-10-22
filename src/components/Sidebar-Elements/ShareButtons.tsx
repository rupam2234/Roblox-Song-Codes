"use client";

import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebookF, FaPinterest, FaReddit } from "react-icons/fa";

const cute = Dancing_Script({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Share = () => {
  const title = "Roblox Song Codes | Tested Boombox Music IDs";

  const [pageTitle, setPageTitle] = useState("");
  const [Url, setUrl] = useState("");
  const pathname = usePathname();
  const [mediaUrl, setMediaUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const allImages = document.querySelectorAll("img");
    const excludeWords = ["logo", "banner", "thumbnail"];
    const filteredImages = Array.from(allImages).filter((img) => {
      const imageSrc = img.src.toLowerCase();
      const containsExcludedWord = excludeWords.some((word) =>
        imageSrc.includes(word)
      );
      return !containsExcludedWord;
    });
    if (filteredImages.length > 0) {
      setMediaUrl(filteredImages[0].src);
    }
  }, []);

  useEffect(() => {
    const extractMetaData = () => {
      const titleElement = document.querySelectorAll("title");
      const titleText =
        titleElement.length > 0 ? titleElement[0]?.textContent || "" : "";
      setPageTitle(titleText);

      const metaDescriptionElement = document.querySelector(
        'meta[property="og:description"]'
      );
      const metaDescriptionContent =
        metaDescriptionElement?.getAttribute("content") || "";
      setDescription(metaDescriptionContent);
    };

    extractMetaData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      let queryString = queryParams.toString() || "";
      const fullUrl = `${window.location.origin}${pathname}${
        queryString ? `?${queryString}` : ""
      }`;
      setUrl(fullUrl);
    }
  }, [pathname]);

  return (
    <div
      className="hidden sm:flex fixed left-[50px] top-[200px] z-50
             flex-col items-center gap-3 p-2"
    >
      <div
        className={cn(
          "text-gray-400 text-[20px] mb-4 flex justify-start items-center",
          cute.className
        )}
      >
        Share:
      </div>
      <FacebookShareButton
        url={Url}
        title={pageTitle}
        hashtag="Roblox Song Codes"
      >
        <div className="rounded-full bg-[#3B5998] hover:bg-transparent text-white hover:text-black p-3 border">
          <FaFacebookF className="w-4 h-4" />
        </div>
      </FacebookShareButton>

      <RedditShareButton url={Url} title={pageTitle}>
        <div className="rounded-full bg-[#FF4500] hover:bg-transparent text-white hover:text-[#FF4500] p-3 border">
          <FaReddit className="w-4 h-4" />
        </div>
      </RedditShareButton>

      <TwitterShareButton
        url={Url}
        title={pageTitle}
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
        title={pageTitle}
        description={description}
        media={mediaUrl}
      >
        <div className="rounded-full bg-[#E60023] hover:bg-transparent text-white hover:text-[#E60023] p-3 border">
          <FaPinterest className="w-4 h-4" />
        </div>
      </PinterestShareButton>
    </div>
  );
};

export default Share;
