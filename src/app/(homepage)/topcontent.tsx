const TopContent = () => {
  return (
    <>
      <div className="text-[17px] text-gray-600 space-y-5">
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How to find a song ID?
        </h2>
        <p>
          To find your favorite song IDs use the search bar. Enter the music
          name you’re looking for, and the table will show you a list of
          matching music IDs. From there, you can copy the Song code and play on
          Boombox.
        </p>
        <p>
          Alternativly you can pick roblox song id from these lists:{" "}
          <a
            className="text-blue-700 hover:text-blue-400"
            href="/popular-tracks"
          >
            most popular tracks
          </a>
          <span className="mx-1">and</span>
          <a
            className="text-blue-700 hover:text-blue-400"
            href="/vibes"
          >
            filtered by vibes
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default TopContent;
