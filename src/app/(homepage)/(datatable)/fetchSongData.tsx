"use client";

import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { SongIDs } from "@/components/custom-components/constants";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { ExternalLink, InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

type FetchSongsProps = {
  apiEndpoint: string;
};

const FetchSongs = ({ apiEndpoint }: FetchSongsProps) => {
  const [data, setData] = useState<SongIDs[]>([]);
  const router = useRouter();
  const [songRated, setsongRated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: SongIDs[] = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  useEffect(() => {
    if (songRated) {
      toast({
        title: "Your rating wasn't added!",
        description: "Because you have already rated this Roblox track.",
        className: "custom-toast",
      });
      setsongRated(false); // Reset the state if needed
    }
  }, [songRated]);

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

    setData((prevData) =>
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

  const formatNameForURL = (name: string) => {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/['"]/g, "") // Remove apostrophes and quotes
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove any characters that aren't letters, numbers, or hyphens
  };

  // not in use
  // const handleRowClick = (rowData: { id: number; name: string }) => {
  //   const { id, name } = rowData;
  //   const encodedName = formatNameForURL(name);
  //   router.push(`/track?id=${id}&name=${encodedName}`);
  // };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const columns = [
    {
      name: "name",
      label: "Track Name",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: string, tableMeta: any) => {
          const rowData = tableMeta.rowData;
          const id = rowData[1];
          const name = rowData[0];

          return (
            <Link
              href={`/track?id=${id}&name=${formatNameForURL(name)}`}
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleRowClick({ id, name });
              // }}
              className="hover:text-blue-400 flex gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}{" "}
              <ExternalLink
                className="mt-[2px] hidden md:block"
                width={15}
                height={15}
              />
            </Link>
          );
        },
      },
    },
    {
      name: "id",
      label: "Song IDs",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: number) => {
          return (
            <div className="flex">
              <p className="mt-[2px] text-[13px] md:text-[14px]">{value}</p>
              <Button
                variant={"outline"}
                size={"sm"}
                className="ml-2 mt-[-7px] flex items-center bg-[#edf2ed] hover:bg-[#edf2ed]"
                onClick={() => handleCopy(value)}
              >
                <span className="inline-block w-[65px] text-[12px]">
                  {" "}
                  {/* Set a fixed width for the text */}
                  {copyStatus[value] ? (
                    <>
                      Copied <span className="ml-1 text-green-500">✓</span>
                    </>
                  ) : (
                    "Copy"
                  )}
                </span>
              </Button>
            </div>
          );
        },
      },
    },
    {
      name: "ratings",
      label: "Ratings",
      options: {
        filter: false,
        sort: false,
        customHeadLabelRender: () => (
          <div className="flex items-center">
            <span>Ratings</span>
            <Tooltip title="Give those Boombox codes a thumbs up! Help us keep the playlist fresh and make sure everyone finds the coolest tracks!">
              <InfoIcon className="h-4 w-4 ml-1" />
            </Tooltip>
          </div>
        ),
        customBodyRender: (value: any, tableMeta: any) => {
          const rowIndex = tableMeta.rowIndex;
          const songId = data[rowIndex].id;
          const currentRating = data[rowIndex].ratings;

          return (
            <div className="flex items-center">
              <p>{value}</p>
              <div
                onClick={() => handleIncrementRating(songId, currentRating)}
                className="p-3 mb-1 ml-2 rounded-full text-[#5f8c81] bg-gray-100 hover:bg-gray-300 cursor-pointer"
              >
                <FaThumbsUp />
              </div>
              <div
                onClick={() => handleDecrementRating(songId, currentRating)}
                className="p-3 mb-1 ml-2 rounded-full text-[#f89895] bg-gray-100 hover:bg-gray-300 cursor-pointer"
              >
                <FaThumbsDown />
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "duration",
      label: "Duration",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any) => <p>{formatDuration(value)}</p>,
      },
    },
  ];

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "sans-serif",
      },
      palette: {
        background: {
          paper: "#FAFAFA",
        },
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              fontWeight: "bolder",
              color: "#5f8c81",
            },
            body: {},
          },
        },
      },
    });

  return (
    <>
      <div className="my-7 border rounded-sm" key={apiEndpoint}>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <CircularProgress />
          </div>
        ) : (
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={""}
              data={data}
              columns={columns}
              options={{
                responsive: "simple",
                selectableRows: "none",
                filter: false,
                print: false,
                download: false,
                searchPlaceholder: "type a song name",
                elevation: 0,
                rowsPerPage: 25,
                rowsPerPageOptions: [5, 10, 25, 50],
              }}
            />
          </ThemeProvider>
        )}
      </div>
      <p className="text-sm text-gray-600 my-4">
        <strong className="text-[#FA8900]">Tip:</strong> if you can&apos;t find
        your track, try searching on the site header. It searches our entire
        track database instead of searching in a category specific table.
      </p>
    </>
  );
};

export default FetchSongs;
