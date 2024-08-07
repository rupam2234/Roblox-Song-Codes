import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type archiveModules = {
  postname: string;
  postFeatureImage: string;
  imageAlt: string;
  postDescription: string;
};

const Archive = () => {
  const archive: archiveModules[] = [
    {
      postname: "How to test the song IDs on Roblox?",
      postFeatureImage: "/media/Roblox Song Code Blog.png",
      imageAlt: "test the song IDs on Roblox",
      postDescription:
        "In this page you will learn how to test roblox music IDs in free Roblox Boombox player.",
    },
    {
      postname: "How to buy the Boombox gamepass on Roblox?",
      postFeatureImage: "/media/Roblox Song Code Blog.png",
      imageAlt: "test the song IDs on Roblox",
      postDescription:
        "In this page you will learn to buy the Boombox gamepass on Roblox and test song IDs.",
    },
    {
      postname: "How to test the song IDs on Roblox?",
      postFeatureImage: "/media/Roblox Song Code Blog.png",
      imageAlt: "test the song IDs on Roblox",
      postDescription:
        "In this page you will learn how to test roblox music IDs in free Roblox Boombox player.",
    },
    {
      postname: "How to buy the Boombox gamepass on Roblox?",
      postFeatureImage: "/media/Roblox Song Code Blog.png",
      imageAlt: "test the song IDs on Roblox",
      postDescription:
        "In this page you will learn to buy the Boombox gamepass on Roblox and test song IDs.",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {archive.map((items, index) => (
        <div className="col-span-4 md:col-span-2">
          <div className="border p-4 bg-[#EDF2ED] h-[200px] rounded-sm flex flex-col">
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
