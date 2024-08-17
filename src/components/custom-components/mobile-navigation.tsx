"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { NavItem } from "./constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { FaTools } from "react-icons/fa";

const Sheet = dynamic(
  () => import("../ui/sheet").then((module) => module.Sheet),
  { ssr: false }
); // Import Sheet dynamically and disable SSR
const SheetContent = dynamic(
  () => import("../ui/sheet").then((module) => module.SheetContent),
  { ssr: false }
); // Import SheetContent dynamically and disable SSR
const SheetTrigger = dynamic(
  () => import("../ui/sheet").then((module) => module.SheetTrigger),
  { ssr: false }
); // Import SheetTrigger dynamically and disable SSR

type MobileNavProps = {
  components: NavItem[];
  childComponents: NavItem[];
};

const MobileNav: React.FC<MobileNavProps> = ({
  components,
  childComponents,
}) => {
  const year = new Date().getFullYear();
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="p-0 w-64 bg-[#4F4F65] border-0 flex flex-col h-full"
      >
        <NavigationMenu className="mx-3 mt-20 flex-grow">
          <NavigationMenuList className="space-y-3">
            {components
              .filter((component) => component.title !== "Tools")
              .map((component, index) => (
                <NavigationMenuItem
                  key={index}
                  className="flex gap-4 text-white px-4 py-2 hover:bg-slate-400/15 rounded-sm"
                >
                  <component.icon />
                  <a href={component.href}>{component.title}</a>
                </NavigationMenuItem>
              ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="flex text-white gap-[13px] w-full mr-2 "
                style={{
                  marginLeft: "12px",
                  padding: "8px",
                }}
              >
                <FaTools size={20} />
                Tools
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="py-4 px-5 w-auto bg-gray-200/50 rounded-sm space-y-3">
                  {childComponents.map((tool, index) => (
                    <li key={index} className="py-1 px-2">
                      <a
                        href={tool.href}
                        className="flex items-center gap-2 text-[15px] text-white font-semibold hover:text-black hover:font-semibold"
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
        <div className="flex justify-center items-end pb-4 mx-4 text-[12px] text-white">
          © {year} Roblox Song Codes. All Rights Reserved.
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
