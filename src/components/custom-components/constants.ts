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

export interface Asset {
  id: number;
  name: string;
  duration: number;
  rating: number;
}