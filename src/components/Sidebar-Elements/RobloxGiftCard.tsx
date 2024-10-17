import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RobloxGiftCard = () => {
  return (
    <div className="mx-3 my-4 text-gray-500 flex gap-5 text-[15px]">
      {/* <p>Surprise Your Loved Ones with Easily Redeemable Roblox Gift Cards!</p> */}
      <Link href={"https://amzn.to/3NsNJm3"} target="_blank" rel="nofollow">
        <Image
          src={"/media/Roblox.png"}
          alt={"Roblox-Gift-Card-800-Robux"}
          width={180}
          height={260}
        />
      </Link>
      <Link href={"https://amzn.to/3Y99Bb0"} target="_blank" rel="nofollow">
        <Image
          src={"/media/Roblox-25-dollar-robux.jpg"}
          alt={"Roblox-25-dollar-robux"}
          width={180}
          height={260}
        />
      </Link>
    </div>
  );
};

export default RobloxGiftCard;
