"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavItem } from "./constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { FaTools } from "react-icons/fa";

// Import Sheet components normally
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { GlobalYear } from "@/app/layout";

type MobileNavProps = {
  components: NavItem[];
  childComponents: NavItem[];
};

const MobileNav: React.FC<MobileNavProps> = ({
  components,
  childComponents,
}) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering only
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Conditionally render Sheet components only after client-side mount
  if (!isClient) {
    return <Menu style={{ marginTop: 1, height: 35.1, width: 24 }} />; // this will prevent CLS issue by displaying the menu icon even if the client rendering is not ready
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="mt-[4px]" />
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
          © {GlobalYear} Roblox Song Codes. All Rights Reserved.
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
