"use client";

import {
  Calculator,
  DockIcon,
  DollarSign,
  LucideInfo,
  Music2Icon,
  SettingsIcon,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NavItem, SearchFormSchema } from "./constants";
import MobileNav from "./mobile-navigation";
import SearchBar from "./searchbar";

// imports end

const Header = () => {
  const components: NavItem[] = [
    {
      title: "Popular Tracks",
      href: "/popular-tracks",
      icon: TrendingUp,
      type: false,
    },
    {
      title: "ID By Vibes",
      href: "/vibes",
      icon: Music2Icon,
      type: false,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: DockIcon,
      type: true,
    },
    {
      title: "Tools",
      href: "/tools",
      icon: SettingsIcon,
      type: false,
    },
  ];

  const toolComponents: NavItem[] = [
    {
      title: "Tax Calculator",
      href: "/tools/tax-calculator",
      icon: Calculator,
      type: false,
    },
    {
      title: "Robux To USD",
      href: "/tools/robux-to-usd",
      icon: DollarSign,
      type: false,
    },
  ];

  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),

    defaultValues: {
      SongName: "",
    },
  });

  return (
    <div className="p-6 lg:px-[170px] lg:py-3 bg-[#5F8C81] flex justify-between">
      <div className="flex justify-start w-[125px] h-[9px]">
        <Link href={"/"}>
          <Image
            src={"/media/Roblox Song Codes Logo.png"}
            width={115}
            height={5}
            alt={"Roblox Song Codes"}
            priority
          />
        </Link>
      </div>
      <div
        className={cn("flex justify-end items-center text-white font-light")}
      >
        <SearchBar />

        <div className="block md:hidden lg:hidden">
          <MobileNav components={components} childComponents={toolComponents} />
        </div>

        <NavigationMenu className="ml-6 hidden sm:block">
          <NavigationMenuList>
            {components
              .filter(
                (component) => component.type && component.title !== "Tools"
              )
              .map((component, index) => (
                <NavigationMenuItem
                  key={index}
                  className="mr-2 text-[15px] font-bold"
                >
                  <a href={component.href}>{component.title}</a>
                </NavigationMenuItem>
              ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-transparent hover:text-white text-[15px] font-bold">
                Tools
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="py-4 px-5 w-52 bg-white space-y-3">
                  {toolComponents.map((tool, index) => (
                    <li key={index} className="py-1 px-2">
                      <a
                        href={tool.href}
                        className="flex items-center gap-2 text-[15px] font-semibold hover:text-[#5F8C81] hover:font-semibold"
                      >
                        <tool.icon />
                        {tool.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
