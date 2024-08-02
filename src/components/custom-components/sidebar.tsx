"use client";

import SidebarMenu from "../Sidebar-Elements/CategoryMenu";
import SocialShare from "./socialShare";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:block">
        {/* <SocialShare /> */}
        <SidebarMenu />
      </div>
      {/* Other content */}
    </div>
  );
};

export default Sidebar;
