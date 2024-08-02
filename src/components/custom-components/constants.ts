"use client"

import { ComponentType } from "react";
import { z } from "zod";

export const SearchFormSchema = z.object({
  SongName: z.string().min(2, {
    message: "type the song name",
  }),
});

export type NavItem = {
  title: string;
  href: string;
  icon: ComponentType;
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