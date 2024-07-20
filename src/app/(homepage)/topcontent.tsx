const TopContent = () => {
  return (
    <>
      <h1 className="text-[18px] font-semibold md:font-medium md:text-[25px] text-gray-600 my-5">
        Roblox Song Codes For Boombox - Largest Song ID Database
      </h1>
      <div className="text-[17px] mt-6 text-gray-600 space-y-5">
        <p>
          This is the largest collection of tested Roblox song codes across
          different genres that you can play on Boombox. We consistently update
          and filter this database to provide you with song IDs that works.
        </p>
        <h2 className="font-bold">How to find a song ID?</h2>
        <p>
          To find your favorite song IDs use the search bar. Enter the music
          name you’re looking for, and the table will show you a list of
          matching music IDs. From there, you can copy the Song code and play on
          Boombox.
        </p>
        <p>
          Alternativly you can pick roblox song id from these lists:{" "}
          <a className="text-blue-700 hover:text-blue-400" href="/">
            Most popular tracks
          </a>
          <span className="mx-1">and</span>
          <a className="text-blue-700 hover:text-blue-400" href="/">
            Trending songs
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default TopContent;
