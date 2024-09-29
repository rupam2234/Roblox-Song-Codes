import { Metadata } from "next";
import Posthead from "../(pageElements)/metaData";
import InContentAd3 from "@/components/adsense-ads/AdsenseAd3";
import HandleList from "./handleList";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";

const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();

export const metadata: Metadata = {
  title: `300+ Roblox Music Codes That Are Not Copyrighted (${month} ${year})`,
  description: `Here’s a list of copyright free Roblox music IDs that are working as of ${year}. We have programmatically tested these codes to ensure they work on Boombox, so you can enjoy them without issues.`,
  authors: [
    {
      name: "Leon Klein",
      url: "",
    },
  ],
  keywords: [
    "roblox music codes not copyrighted",
    "Copyright free Roblox song codes",
    "roblox copyright free songs",
  ],
  publisher: "Roblox Song Codes",
  openGraph: {
    title: `Roblox Music Codes That Are Not Copyrighted (${month} ${year})`,
    description: `Here’s a list of copyright free Roblox music IDs that are working as of ${year}. We have programmatically tested these codes to ensure they work on Boombox, so you can enjoy them without issues.`,
    images: "/media/Roblox Music Codes That Are Not Copyrighted.png",
    publishedTime: "25 september, 2024",
    authors: "Leon Klein",
  },
};

const CopyRightFreeIds = () => {
  return (
    <section>
      <Posthead
        title={`300+ Roblox Music Codes That Are Not Copyrighted (${month} ${year})`}
        author={"Leon Klein"}
        publishDate={"25 september, 2024"}
        featuredImage={"/media/Roblox Music Codes That Are Not Copyrighted.png"}
        featuredImageAlt={"Roblox-Music-Codes-That-Are-Not-Copyrighted"}
      />
      <div className="space-y-6 text-[16px] mt-8 text-gray-700 leading-relaxed">
        <p>
          Roblox music codes are a delightful way to set the mood in your
          virtual adventures!
        </p>
        <p>
          But you cannot play just any song without a license or written
          permission because Roblox employs both automatic and manual flagging
          for copyrighted audio.
        </p>
        <p>So what do you play?</p>
        <p>
          It&apos;s the Non-Copyrighted Roblox Music (NCS releases) you can
          safely use in Roblox.
        </p>
        <p>
          These tracks won&apos;t land you in any copyright trouble or get your
          account banned on the platform, so feel free to groove to them. They
          are some of my favorite copyright free roblox music codes and
          associated tracks are atleast 1.30 minutes longer.
        </p>
        <FirstInContentAd/>
        <HandleList apiEndpoint={"/api/songByDuration"} />
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How do I test these song IDs?
        </h2>
        <p>
          It&apos;s easy to test roblox tracks. You can either copy and place
          these codes into Boombox textbox (test on a free Boombox experience if
          you don&apos;t have access to paid boombox player) or you can click on
          the track name from the list above and try the music on Roblox using
          the &apos;Listen on Roblox&apos; button.
        </p>
        <InContentAd3 />
        <h3 className="font-bold text-[18px] text-[#5F8C81]">
          More Roblox Song IDs:
        </h3>
        <p>
          We&apos;ve compiled an extensive list of active Roblox song IDs on
          this site. Browse through these pages to discover some fantastic
          tracks for yourself:
        </p>
        <ul className="terms-list space-y-3">
          <li>
            <a href="/vibes" className="text-blue-500 hover:text-orange-500">
              Boombox Music IDs Categorized by Vibes
            </a>
          </li>
          <li>
            <a
              href="/popular-tracks"
              className="text-blue-500 hover:text-orange-500"
            >
              Popular Boombox Music IDs
            </a>
          </li>
          <li>
            <a
              href="/blog/monstercat-roblox-songs"
              className="text-blue-500 hover:text-orange-500"
            >
              Latest Monstercat Roblox Song IDs
            </a>
          </li>
        </ul>
        <p>... or</p>
        <p>
          Head over to{" "}
          <a href="/" className="text-blue-500 hover:text-orange-500">
            the home page
          </a>{" "}
          and discover the entire database of Roblox song IDs from different
          genres.
        </p>
      </div>
    </section>
  );
};

export default CopyRightFreeIds;
