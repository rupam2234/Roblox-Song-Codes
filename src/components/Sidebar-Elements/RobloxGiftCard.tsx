import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RobloxGiftCard = () => {
  return (
    <div className="mx-3 my-4 text-gray-500 text-[15px]">
      {/* <p>Surprise Your Loved Ones with Easily Redeemable Roblox Gift Cards!</p> */}
      <Link href={"https://amzn.to/3NsNJm3"} target="_blank" rel="nofollow">
        <Image
          src={"/media/Roblox.png"}
          alt={"Roblox-Gift-Card-800-Robux"}
          width={250}
          height={400}
        />
      </Link>
      <p className=" mt-2">
        <Link
          href={"https://www.roblox.com/redeem"}
          target="_blank"
          rel="nofollow"
          className="flex gap-1 hover:underline"
        >
          Redeem Here
          <ExternalLinkIcon className="w-4 h-4 mt-[2px]" />
        </Link>
      </p>
    </div>
  );
};

export default RobloxGiftCard;
