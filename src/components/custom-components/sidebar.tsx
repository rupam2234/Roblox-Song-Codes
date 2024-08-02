"use client";

import SidebarMenu from "../Sidebar-Elements/CategoryMenu";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <SidebarMenu />
      </div>
      {/* Other content */}
    </div>
  );
};

export default Sidebar;
