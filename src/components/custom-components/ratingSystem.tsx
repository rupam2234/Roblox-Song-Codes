"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState, useEffect } from "react";

export function RatingSystem() {
  const [state, setState] = useState({
    review: "",
    rating: 0, // Initial value
  });
  const [ratingSum, setRatingSum] = useState<number>(0);
  const [ratingCount, setRatingCount] = useState<number>(0);

  const id: number = 1;

  useEffect(() => {
    async function fetchRatings() {
      try {
        console.log("Fetching ratings...");
        const response = await fetch(`/api/fetchUserRating?id=${id}`);
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data) {
          const temp_total_rating: number = data.total_rating;
          const temp_rating_number: number = data.rating_number;

          // Calculate the average rating with the latest fetched data
          const averageRating = temp_rating_number
            ? temp_total_rating / temp_rating_number
            : 0;
          const roundedRating = Math.round(averageRating);

          // Update the state with the fetched data
          setRatingSum(temp_total_rating);
          setRatingCount(temp_rating_number);

          // Update the rating state with the calculated rounded rating
          setState((prevState) => ({
            ...prevState,
            rating: roundedRating,
          }));

          console.log(averageRating);
        }
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    }

    fetchRatings();
  }, [id]);

  async function handleChange(selectedValue: number) {
    // Update the sum and count of ratings in the component state
    const newSum = ratingSum + selectedValue;
    const newCount = ratingCount + 1;
    setRatingSum(newSum);
    setRatingCount(newCount);

    // Update the rating in the state
    setState((prevState) => ({
      ...prevState,
      rating: selectedValue,
    }));

    try {
      console.log("Sending rating update..."); // Log when updating rating
      await fetch("/api/ratingHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, selectedValue }),
      });
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  }

  return (
    <div className="flex ">
      <Rating
        onChange={handleChange}
        value={state.rating}
        style={{ maxWidth: 100 }}
      />
      <div className="text-[15px] flex">
        <p className="ml-2 mt-[5px]">(Total Ratings: {ratingCount})</p>
      </div>
    </div>
  );
}
