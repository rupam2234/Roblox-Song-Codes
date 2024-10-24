"use client";

import { SongIDs } from "@/components/custom-components/constants";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";
import ProgressBar from "@/components/custom-components/progressbar";
import Sidebar from "@/components/custom-components/sidebar";
import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import FetchSongs from "@/app/(homepage)/(datatable)/fetchSongData";

const TrackPageTest = ({ initialSongData }: { initialSongData: SongIDs[] }) => {
  const [songData, setSongData] = useState<SongIDs[]>(initialSongData);
  const [copyStatus, setCopyStatus] = useState<{ [key: number]: boolean }>({});
  const [songRated, setsongRated] = useState(false);
  const { toast } = useToast();

  function handleCopy(id: number) {
    navigator.clipboard
      .writeText(id.toString())
      .then(() => {
        setCopyStatus((prevState) => ({ ...prevState, [id]: true }));
        setTimeout(() => {
          setCopyStatus((prevState) => ({ ...prevState, [id]: false }));
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  const handleRatingChange = async (
    id: number,
    currentRating: number,
    change: number
  ) => {
    const newRating = currentRating + change;

    // Cookies to handle and prevent multiple ratings
    const setJSONCookie = (
      name: string,
      data: any,
      options?: Cookies.CookieAttributes
    ) => {
      const expirationDays = 10; // Number of days until the cookie expires
      Cookies.set(name, JSON.stringify(data), { expires: expirationDays });
    };

    const getJSONCookie = (name: string): any => {
      const data = Cookies.get(name);
      return data ? JSON.parse(data) : null;
    };

    // Get rated songs and actions from cookies
    const ratedSongs = getJSONCookie("ratedSongs") || {};
    const ratingActions = getJSONCookie("ratingActions") || {};

    // Check if the user is trying to change the rating beyond the allowed range
    const previousAction = ratingActions[id] || 0; // 0: no action, 1: increment, -1: decrement
    if (
      (previousAction === 1 && change === 1) ||
      (previousAction === -1 && change === -1)
    ) {
      setsongRated(true);
      return;
    }

    setSongData((prevData) =>
      prevData.map((song) =>
        song.id === id ? { ...song, ratings: newRating } : song
      )
    );

    // Save the rating action in cookies
    ratedSongs[id] = true;
    ratingActions[id] = change; // Store the user's last action (1 or -1)
    setJSONCookie("ratingActions", ratingActions);
    setJSONCookie("ratedSongs", ratedSongs);

    try {
      await fetch("/api/updateRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, newRating }),
      });
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  const handleIncrementRating = (id: number, currentRating: number) => {
    handleRatingChange(id, currentRating, 1);
  };

  const handleDecrementRating = (id: number, currentRating: number) => {
    handleRatingChange(id, currentRating, -1);
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (songRated) {
      toast({
        title: "Your rating wasn't added!",
        description: "Because you have already rated this Roblox track.",
        className: "custom-toast",
      });
      setsongRated(false); // Reset the state if needed
    }
  }, [songRated, toast]);

  function handleListenButton(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    try {
      window.open(
        `https://roblox.com/library/${songData.map((song) => song.id)}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Function to handle rating logic...
  // (Include your existing rating logic here)

  return (
    <main className="grid-cols-12 grid md:gap-10 min-h-screen p-6 lg:px-[170px]">
      <section className="lg:col-span-8 col-span-12 place-items-center">
        {/* Content Section */}
        {songData.length > 0 ? (
          songData.map((song) => (
            <div key={song.id} className="my-5">
              <h1 className="text-[18px] font-semibold md:font-medium md:text-[25px] text-gray-600">
                {song.name} - Roblox Audio ID
              </h1>
              <div className="mt-10 text-gray-600 space-y-5">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        Track ID:
                      </TableCell>
                      <TableCell className="flex">
                        <p className="mt-1">{song.id}</p>
                        <Button
                          variant={"outline"}
                          size={"sm"}
                          className="ml-6 mt-[-5px] flex items-center bg-[#edf2ed] hover:bg-[#edf2ed]"
                          onClick={() => handleCopy(song.id)}
                        >
                          <span className="inline-block w-[65px]">
                            {" "}
                            {/* Set a fixed width for the text */}
                            {copyStatus[song.id] ? (
                              <>
                                Copied{" "}
                                <span className="ml-1 text-green-500">✓</span>
                              </>
                            ) : (
                              "Copy"
                            )}
                          </span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        Is it working?
                      </TableCell>
                      <TableCell className="flex">
                        <p className="mt-1">
                          {songData.map((song) => song.ratings)}
                        </p>
                        <Button
                          variant={"outline"}
                          size={"icon"}
                          className="ml-6 mt-[-5px] flex items-center bg-green-200 hover:bg-green-300 rounded-full"
                          onClick={() =>
                            handleIncrementRating(song.id, song.ratings)
                          }
                        >
                          <FaThumbsUp />
                        </Button>
                        <Button
                          variant={"outline"}
                          size={"icon"}
                          className="ml-2 mt-[-5px] flex items-center bg-red-200 hover:bg-red-300 rounded-full"
                          onClick={() =>
                            handleDecrementRating(song.id, song.ratings)
                          }
                        >
                          <FaThumbsDown />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        Duration:
                      </TableCell>
                      <TableCell>{formatDuration(song.duration)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        <p className="mt-2">Genre:</p>
                      </TableCell>
                      <TableCell>
                        <p className="capitalize mt-2">{song.genres}</p>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        <p className="mt-2">Artist:</p>
                      </TableCell>
                      <TableCell>
                        <p className="capitalize mt-2">{song.artist}</p>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-[17px]">
                        <p className="mt-2">Updated Date:</p>
                      </TableCell>
                      <TableCell>
                        <p className="capitalize mt-2">{song.updated}</p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="text-[17px]">
                  <p className="mt-14">
                    You can use the <strong>{song.id}</strong> code to play
                    &quot;{song.name}&quot; on Roblox Boombox music player. Or
                    you can...
                  </p>
                  <div className="mt-6">
                    <Button
                      variant={"secondary"}
                      className="bg-[#ff804e] hover:bg-[#ff7040] hover:shadow-lg hover:text-white text-white flex items-center group"
                      onClick={handleListenButton}
                    >
                      Listen on Roblox
                      <svg
                        fill="#ffffff"
                        width="20px" // Adjust the size as needed
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        className="ml-2 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="primary"
                            d="M18.86,5A9.38,9.38,0,0,0,2.64,12.05L3,17v1a4,4,0,0,0,4,4H8a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2H7a3.94,3.94,0,0,0-2.36.79A7.37,7.37,0,0,1,12,4a7.37,7.37,0,0,1,7.36,7.79A3.94,3.94,0,0,0,17,11H16a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2h1a4,4,0,0,0,4-4V17l.36-5A9.43,9.43,0,0,0,18.86,5Z"
                            style={{ fill: "#ffffff" }}
                          ></path>
                        </g>
                      </svg>
                    </Button>
                  </div>
                  <br />
                  <FirstInContentAd />
                  <div className="space-y-3">
                    <p>
                      <strong>Important: </strong>some music IDs (especially the
                      ones with longer code such as more than 11 numbers) might
                      not always play nicely. This can be due to either the
                      creator forget to set their audio assets to play on loop.
                    </p>
                    <p>
                      Without this setting, the audio might play once and then
                      fall silent, leaving us all hanging mid-tune.
                      Additionally, creators can choose whether to make their
                      audio available for all games or restrict it to specific
                      games.{" "}
                    </p>
                    <p>
                      <strong>So, if you stumble upon a cool track</strong>,
                      give it a thumbs-up if it&apos;s working on Boombox.
                      It&apos;s like a musical quality control vote!
                    </p>
                    <p>
                      It helps us to filter out the gems from the
                      not-so-gem-like IDs. Plus, it&apos;s a friendly way to
                      say, &quot;Hey, this track rocks!&quot;
                    </p>
                  </div>

                  <h2 className="mt-14 font-bold text-[20px] text-[#5F8C81]">
                    Similar Tracks You May Like:
                  </h2>
                </div>
                <FetchSongs
                  apiEndpoint={`/api/getSimilerTrack?name=${song.name.substring(
                    0,
                    3
                  )}`}
                />
                <br />
                <div className="text-[16px] space-y-3">
                  <p>
                    <strong>
                      You can find more such song IDs on these pages:
                    </strong>
                  </p>
                  <ul className="space-y-3 terms-list">
                    <li>
                      <a
                        href="/blog/latest-roblox-song-codes"
                        className="text-blue-600 hover:text-blue-500 hover:underline"
                      >
                        Latest Working Roblox Song Codes (Tested).
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog/monstercat-roblox-songs"
                        className="text-blue-600 hover:text-blue-500 hover:underline"
                      >
                        Latest Monstercat Roblox Song IDs.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          // <p>Loading...</p>
          <ProgressBar />
        )}
      </section>
      <section className="hidden lg:block lg:col-span-4 col-span-12 ">
        {/* Sidebar */}
        <Sidebar />
      </section>
    </main>
  );
};

export default TrackPageTest;
