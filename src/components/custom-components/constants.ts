"use client";

import { ComponentType } from "react";
import { z } from "zod";

export const SearchFormSchema = z.object({
  SongName: z.string().min(1, {
    message: "type the song name",
  }),
});

export type NavItem = {
  title: string;
  href: string;
  icon: ComponentType;
  type: boolean;
};

export type SongIDs = {
  name: string;
  id: number;
  ratings: number;
  genres: string;
  duration: number;
  artist: string;
  updated: string;
};

// Define the type for the database row
export type DBRow = {
  name: string;
  id: number;
  ratings: number;
  genres: string;
  duration: number;
  artist: string;
  update_date: Date; // Original field from the database
};
