"use client";

import { SongIDs } from "@/components/custom-components/constants";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";
import ProgressBar from "@/components/custom-components/progressbar";
import FetchSongs from "../(homepage)/(datatable)/fetchSongData";
import Sidebar from "@/components/custom-components/sidebar";

const TrackPage = () => {
  const [SongData, setSongData] = useState<SongIDs[]>([]);
  const [copyStatus, setCopyStatus] = useState<{ [key: number]: boolean }>({});
  const [songRated, setsongRated] = useState(false);
  const { toast } = useToast();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");

    if (id && !hasFetched) {
      const fetchTrackDetails = async () => {
        try {
          const url = new URL("/api/getTrack", window.location.origin);
          url.searchParams.append("id", id);

          const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            setSongData(data);
            setHasFetched(true);
          } else {
            console.error("Failed to fetch track details");
          }
        } catch (error) {
          console.error("Error fetching track details:", error);
        }
      };

      fetchTrackDetails();
    }
  }, [hasFetched]);

  useEffect(() => {
    if (SongData.length > 0) {
      // Assuming SongData[0] contains the relevant song details
      const songName = SongData[0].name;
      const title = `${songName} - Song Code For Boombox`;
      const description = `Get the Roblox song code for ${songName} and use it on your Boombox.`;

      // Update the document's title and meta description
      document.title = title;
      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [SongData]);

  function handleCopy(id: number) {
    navigator.clipboard
      .writeText(id.toString())
      .then(() => {
        setCopyStatus((prevState) => ({ ...prevState, [id]: true }));

        // return the COPIED text to COPY on the button
        // set timer

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
        description: "Bacause you have already rated this Roblox track.",
        className: "custom-toast",
      });
      setsongRated(false); // Reset the state if needed
    }
  }, [songRated, toast]);

  return (
    <main className="grid-cols-12 grid gap-10 min-h-screen p-6 lg:px-[170px]">
      <section className="lg:col-span-8 col-span-12 place-items-center">
        {/* Content Section */}
        {SongData.length > 0 ? (
          SongData.map((song) => (
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
                        User Rating:
                      </TableCell>
                      <TableCell className="flex">
                        <p className="mt-1">
                          {SongData.map((song) => song.ratings)}
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
                <div>
                  <p className="mt-14">
                    You can use the <strong>{song.id}</strong> code to play the
                    &quot;{song.name}&quot; on Boombox audio player.
                  </p>
                  <br />
                  <p>
                    If you don&apos;t have the Boombox Pass you can still look
                    for free Boombox alternatives experience in Roblox. Open
                    Roblox and search for{" "}
                    <a
                      href="https://www.roblox.com/discover/?Keyword=boombox"
                      rel="nofollow"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-400"
                    >
                      boombox in experience
                    </a>
                    , you will find a lot of options with free Boombox players
                    where you can test your music IDs.
                  </p>
                  <br />
                  <p>
                    Leave a thumb if you liked the audio and the track ID is
                    working on Boombox. This will help us filter the song IDs
                    that is truely working on Roblox.
                  </p>

                  <h2 className="mt-14 font-bold text-[20px] text-[#5F8C81]">
                    Similar Tracks You May Like:
                  </h2>

                  <FetchSongs
                    apiEndpoint={`/api/getSimilerTrack?name=${song.name.substring(
                      0,
                      3
                    )}`}
                  />
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

export default TrackPage;
