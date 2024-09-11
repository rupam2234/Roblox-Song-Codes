"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { archiveModules } from "@/components/custom-components/constants";
import { getArchive } from "./archiveHandler";

const Archive = () => {
  const [archive, setArchive] = useState<archiveModules[]>([]);

  useEffect(() => {
    setArchive(getArchive());
  }, []);

  function handleClick(link: string) {
    try {
      if (link) {
        window.location.href = `/blog/${link}`;
      } else {
        console.error("Invalid link:", link);
      }
    } catch (error) {
      console.error("Error navigating to the URL:", error);
    }
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {archive.map((items, index) => (
        <div className="col-span-4 md:col-span-2" key={index}>
          <div className="border p-4 bg-[#EDF2ED] h-[210px] rounded-sm flex flex-col">
            <h2 className="font-bold text-[16px] text-gray-700">
              {items.postname}
            </h2>
            {/* <Image
              src={items.postFeatureImage}
              alt={items.imageAlt}
              width={200}
              height={200}
            /> */}
            <div className="mt-3 flex-grow text-[14px]">
              {items.postDescription}
            </div>
            <Button
              size={"sm"}
              variant={"secondary"}
              className="self-end text-right text-[13px] bg-[#cce0cc] hover:bg-[#b4cdb4] group"
              onClick={() => handleClick(items.postLink)}
            >
              Read more{" "}
              <ArrowRight className="ml-1 mt-[1px] h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archive;
