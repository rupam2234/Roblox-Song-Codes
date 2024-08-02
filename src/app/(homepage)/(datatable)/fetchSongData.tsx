"use client";

import MUIDataTable from "mui-datatables";
import React, { useEffect, useRef, useState } from "react";
import { SongIDs } from "@/components/custom-components/constants";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaThumbsUp } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

type FetchSongsProps = {
  apiEndpoint: string;
};

const FetchSongs = ({ apiEndpoint }: FetchSongsProps) => {
  const [data, setData] = useState<SongIDs[]>([]);
  const [start, setStart] = useState(0); // Track pagination start point
  const [moreDataAvailable, setMoreDataAvailable] = useState(true); // Track if more data is available
  const router = useRouter();
  const [songRated, setsongRated] = useState(false);
  const hasFetchedData = useRef(false);

  const fetchData = async (start: number) => {
    try {
      const response = await fetch(`${apiEndpoint}?start=${start}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      // Update state with new data and check if more data is available
      setData((prevData) => [...prevData, ...result.rows]);
      setMoreDataAvailable(result.moreDataAvailable);
      setStart(result.nextStart || start); // Update start for the next request if more data is available
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data on component mount
    if (!hasFetchedData.current) {
      fetchData(start);
      hasFetchedData.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiEndpoint]);

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

  const handleRowClick = (
    rowData: string[],
    rowMeta: { dataIndex: number; rowIndex: number }
  ) => {
    const id = parseInt(rowData[1], 10); // Assuming ID is at index 1
    const name = rowData[0]; // Assuming name is at index 0
    router.push(`/track?id=${id}`);
  };

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
            <a
              href={`/track?id=${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleRowClick([name, id.toString()], tableMeta.rowMeta); // Pass the required format
              }}
              className="hover:text-blue-400"
            >
              {name}
            </a>
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

  const loadMoreData = () => {
    if (moreDataAvailable) {
      fetchData(start);
    }
  };

  return (
    <>
      <div className="mt-7 border rounded-sm">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={{
              selectableRows: "none",
              filter: false,
              print: false,
              download: false,
              searchPlaceholder: "type a song name",
              elevation: 0,
              rowsPerPage: 25,
              rowsPerPageOptions: [5, 10, 25, 50],
              onRowClick: handleRowClick, // Adjusted for proper typing
            }}
          />
          {moreDataAvailable && (
            <div className="flex mx-4 justify-between items-center">
              <p className="my-4 text-gray-500 text-[13px]">
                Click on &apos;Load More&apos; to fetch more Song IDs:
              </p>
              <Button
                onClick={loadMoreData}
                size={"sm"}
                className="px-4 py-2 text-white bg-[#5F8C81] hover:bg-[#5F8C81] rounded"
              >
                Load More
              </Button>
            </div>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

export default FetchSongs;
