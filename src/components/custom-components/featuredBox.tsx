import Image from "next/image";
import { cn } from "@/lib/utils";
import { Fira_Sans } from "next/font/google";

const nato = Fira_Sans({
  subsets: ["latin"],
  weight: "800",
  preload: true,
});

const FeaturedBox = ({
  title,
  descriptionText1,
  descriptionText2,
  image,
  altText,
}: {
  title: string;
  descriptionText1: string;
  descriptionText2: string;
  image: string;
  altText: string;
}) => {
  return (
    <div className="w-full px-7 py-10 border rounded-md my-3 bg-gradient-to-br from-[#5F8C81] to-[#337c86]">
      <h1
        className={cn(
          "text-[18px] text-white md:font-medium md:text-[32px]",
          nato.className
        )}
      >
        {title}
      </h1>
      <div className="grid grid-cols-9 gap-10 justify-center items-center mt-7 md:mt-0">
        <div className="text-[16px] col-span-9 md:col-span-7 text-white space-y-5">
          <p>{descriptionText1}</p>
          <p>{descriptionText2}</p>
        </div>
        <div className="hidden col-span-2 md:flex m-6">
          <Image
            //"/media/Roblox-Boombox-Icon.png"
            src={image}
            width={375}
            height={375}
            alt={altText}
            className="zoom-on-hover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
