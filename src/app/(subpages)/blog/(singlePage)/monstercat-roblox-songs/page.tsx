import { Metadata } from "next";
import Posthead from "../(pageElements)/metaData";
import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";
import InContentAd3 from "@/components/adsense-ads/AdsenseAd3";
import TableSchemaHandler from "@/components/SchemaHandler/schema";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";

export const metadata: Metadata = {
  title: "Latest Monstercat Roblox Song IDs That Works",
  description:
    "Here’s a list of Roblox music IDs published by Monstercat. We’ve tested all codes to ensure they work on your Boombox, so you can enjoy them without issues.",
  authors: [
    {
      name: "Leon Klein",
      url: "",
    },
  ],
  keywords: [
    "Monstercat Roblox Song IDs",
    "Best Monstercat Roblox Songs",
    "roblox monstercat songs",
    "monstercat songs roblox id",
    "Latest Monstercat Roblox Song IDs",
  ],
  publisher: "GeekGuidez",
  openGraph: {
    title: "Best Monstercat Roblox Song IDs That Works",
    description:
      "Here’s a list of Roblox music IDs published by Monstercat. We’ve tested all codes to ensure they work on your Boombox, so you can enjoy them without issues.",
    images: "/media/Working Monstercat Roblox Song IDs.png",
    publishedTime: "10 september, 2024",
    authors: "Leon Klein",
  },
};

const MonsterCatList = () => {
  const artist = "Monstercat";

  const year = new Date().getFullYear();

  return (
    <section>
      <Posthead
        title={`Latest Monstercat Roblox Song IDs (Works in ${year})`}
        author={"Leon Klein"}
        publishDate={"10 september, 2024"}
        featuredImage={"/media/Working Monstercat Roblox Song IDs.png"}
        featuredImageAlt={"Latest-Monstercat-Roblox-Song-IDs"}
      />
      <div className="space-y-6 text-[16px] mt-8 text-gray-700 leading-relaxed">
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Monstercat"
            className="text-blue-500 hover:text-orange-500"
          >
            Monstercat
          </a>
          , originally called Monstercat Media, is an awesome independent
          electronic music label from Vancouver.
        </p>
        <p>
          If you are looking for a list of Monstercat tracks that actually works
          try this list of Monstercat Roblox song IDs. All of these tracks are
          fetched from the public audio database on Roblox and hence are proven
          to run and add more fun into your gaming environment.
        </p>
        <p>
          On the table below, you can eitehr use the search bar to search for a
          specific Monstercat track. Type in the song name, and the table will
          show a list of matching music IDs. Or you can just then copy any
          Monstercat code from the table and play it on Boombox.
        </p>
        <p>
          You can also click over the track names on the table to find out more
          about the tracks and few relevent track IDs.
        </p>
        <p className="italic">
          Feel free to rate the tracks after you&apos;ve used them! Your
          feedback helps us keep track of what&apos;s popular and ensures that
          all the tracks are working smoothly.
        </p>
        <br />
        <FirstInContentAd/>
        <TableSchemaHandler
          Headline={"Monstercat Roblox Song IDs That Works"}
          AuthorName={"Leon Klein"}
          PageUrl={"https://roblox.geekguidez.com/blog/monstercat-roblox-songs"}
          PageName={`Latest Monstercat Roblox Song IDs (Works in ${year})`}
          PageAbout={
            "Here’s a list of Roblox music IDs published by Monstercat. We’ve tested all codes to ensure they work on your Boombox, so you can enjoy them without issues."
          }
        />
        <FetchSongs apiEndpoint={`/api/ByArtist?artist=${artist}`} />
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How to Test Monstercat Roblox Song IDs?
        </h2>
        <p>
          It&apos;s easy to test Monstercat tracks or any music IDs on Roblox
          boombox. Typically you have{" "}
          <a
            href="/blog/how-to-test-roblox-song-ids-on-boombox"
            className="text-blue-500 hover:text-orange-500"
          >
            two ways to check
          </a>{" "}
          if your code works or not!
        </p>
        <p>
          Either you can get the Boombox Gamepass and test your code or join a
          free Boombox game, there&apos;re planty of them in Roblox. Just search
          for Boombox in experience and you&apos;ll find a lot of games that
          offers to play Boombox music for free.{" "}
        </p>
        <InContentAd3 />
        <h3 className="font-bold text-[18px] text-[#5F8C81]">
          More Roblox Song IDs:
        </h3>
        <p>
          We have covered a large list of currently working Roblox song IDs on
          this website. You can go through these pages to see if you can find
          some great tracks for yourself:
        </p>
        <ul className="terms-list space-y-3">
          <li>
            <a href="/vibes" className="text-blue-500 hover:text-orange-500">
              Boombox Music Codes Categorized by Vibes
            </a>
          </li>
          <li>
            <a
              href="/popular-tracks"
              className="text-blue-500 hover:text-orange-500"
            >
              Popular Boombox Music Codes
            </a>
          </li>
          <li>
            <a
              href="/blog/latest-roblox-song-codes"
              className="text-blue-500 hover:text-orange-500"
            >
              Latest Working Roblox Song Codes in 2024
            </a>
          </li>
        </ul>
        <p>... or</p>
        <p>
          Just head over to{" "}
          <a href="/" className="text-blue-500 hover:text-orange-500">
            the main page
          </a>{" "}
          to discover entire database of Roblox song IDs from different genres.
        </p>
      </div>
    </section>
  );
};

export default MonsterCatList;
