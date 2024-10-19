import InContentAd2 from "@/components/adsense-ads/AdsenseAd2";

const BottomContents = () => {
  return (
    <div className="text-[17px] mt-10 text-gray-600 space-y-5 mb-24">
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        How to use Roblox music codes in Boombox?
      </h2>
      <p>
        Using Roblox Music IDs is simple. You need to join a game that has an
        option to get Boombox. You&apos;ll need to acquire the Boombox game pass
        for this.
      </p>
      <p>
        For that, open your inventory and equip the Boombox on the{" "}
        <strong>games that support it</strong> (
        <a
          href="/blog/how-to-test-roblox-song-ids-on-boombox"
          className="text-blue-600 hover:text-blue-400"
        >
          check out these games
        </a>
        ). Games often have a specific key to open the Boombox player; try
        pressing &apos;B&apos; by default.
      </p>
      <p>
        When you click on the Boombox gear, a GUI will appear where you&apos;ll
        find a default codes for music. To play your favorite music, copy your
        music ID codes and paste into the GUI. Finally, press the play button.
      </p>
      <p>
        You can also look for free Boombox alternatives to test working music ID
        codes in Roblox. For that you will need tp open Roblox and search for{" "}
        <a
          href="https://www.roblox.com/discover/?Keyword=boombox"
          target="_blank"
          className="text-blue-600 hover:text-blue-400"
        >
          boombox in experience
        </a>
        , you can pick any of the available options to test your favorite track
        via ID.
      </p>
      <br />
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        How to play audio on Roblox using admin command?
      </h2>
      <p>
        To play music using an admin command, ensure you have admin privileges
        in the game you&apos;re playing. Typically, the commands are
        standardized across games.{" "}
      </p>
      <p>
        To play a specific track, type :music followed by a space, and then
        paste your music ID using Ctrl+V (Cmd+V on Mac).
      </p>

      <p>Here&apos;s an example:</p>
      <br />
      <div className="py-2 px-4 rounded-sm bg-gray-700 text-[#C5D6CB]">
        <code>
          Type &apos;:music 1839346346&apos; to play &apos;You Knock At My
          Door&apos;
        </code>
      </div>
      <br />
      <InContentAd2 />
      <p className="font-bold  text-[#5F8C81]">Discover More Codes:</p>
      <ul className="terms-list space-y-3">
        <li>
          <a
            href="/blog/how-to-test-roblox-song-ids-on-boombox"
            className="hover:text-blue-400 text-blue-600"
          >
            How to test the song IDs on Roblox?
          </a>
        </li>
        <li>
          <a
            href="/blog/latest-roblox-song-codes"
            className="hover:text-blue-400 text-blue-600"
          >
            Latest Working Roblox Song Codes
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomContents;
