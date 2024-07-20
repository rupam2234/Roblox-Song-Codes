"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { NavItem } from "./constants";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@radix-ui/react-navigation-menu";

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
};

const MobileNav: React.FC<MobileNavProps> = ({ components }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0 w-64 bg-[#4F4F65] border-0">
        <NavigationMenu className="ml-3 mr-3 mt-20">
            <NavigationMenuList>
                {components.map((component, index) => (
                <NavigationMenuItem key={index} className="flex gap-4 text-white px-4 py-2 hover:bg-slate-400/15 rounded-sm">
                    <component.icon/><a href={component.href}>{component.title}</a>
                </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
